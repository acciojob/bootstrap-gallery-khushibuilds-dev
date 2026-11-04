document.addEventListener("click", function (e) {
  const anchor = e.target.closest(".lightbox");
  if (!anchor) return;

  e.preventDefault();

  const modalElement = document.getElementById("lightboxModal");
  const modalImage = document.getElementById("lightboxImg");

  modalImage.src = anchor.href;

  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
  modal.show();
});