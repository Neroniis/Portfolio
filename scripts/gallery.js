document.addEventListener("DOMContentLoaded", () => {
  const backdrop = document.createElement("div");
  backdrop.classList.add("lightbox-backdrop");
  document.body.appendChild(backdrop);

  const zoomImg = document.createElement("img");
  zoomImg.classList.add("lightbox-image");
  document.body.appendChild(zoomImg);

  let originalRect = null;
  let isOpen = false;

  document.querySelectorAll(".photo-grid img").forEach(img => {
    img.addEventListener("click", () => {
      if (isOpen) return;

      originalRect = img.getBoundingClientRect();
      zoomImg.src = img.src;

      zoomImg.style.top = `${originalRect.top}px`;
      zoomImg.style.left = `${originalRect.left}px`;
      zoomImg.style.width = `${originalRect.width}px`;
      zoomImg.style.height = `${originalRect.height}px`;
      zoomImg.style.transform = "none";

      backdrop.classList.add("active");
      document.body.classList.add("lightbox-active");

      // Forzamos reflow para que la animación funcione
      void zoomImg.offsetWidth;

      zoomImg.classList.add("active");
      zoomImg.style.top = "50%";
      zoomImg.style.left = "50%";
      zoomImg.style.transform = "translate(-50%, -50%)";
      zoomImg.style.width = "80vw";
      zoomImg.style.height = "auto";
      isOpen = true;
    });
  });

  function closeLightbox() {
    if (!isOpen) return;

    zoomImg.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.classList.remove("lightbox-active");

    // Limpia completamente después de animación
    setTimeout(() => {
      zoomImg.src = "";
      zoomImg.style = ""; // limpia todos los estilos
      isOpen = false;
    }, 300); // debe coincidir con transition del CSS
  }

  backdrop.addEventListener("click", closeLightbox);
  zoomImg.addEventListener("click", closeLightbox);
});