document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-mode-toggle");

  toggle.addEventListener("click", () => {
    document.body.style.transition =
      "background-color 0.5s ease, color 0.5s ease";
    document.body.classList.toggle("dark-mode");

    toggle.style.opacity = 0;
    setTimeout(() => {
      toggle.innerHTML = document.body.classList.contains("dark-mode")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      toggle.style.opacity = 1;
    }, 300);
  });

  const images = document.querySelectorAll(".certificate img");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  lightbox.appendChild(img);

  images.forEach((image) => {
    image.addEventListener("click", () => {
      img.src = image.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
