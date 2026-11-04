// Lightbox – replace image inside modal when a thumbnail is clicked
document.addEventListener('click', function (e) {
    const anchor = e.target.closest('.lightbox');
    if (!anchor) return;               // not a lightbox click

    const fullImgUrl = anchor.getAttribute('href');
    const modalImg = document.getElementById('lightboxImg');
    modalImg.src = fullImgUrl;          // set the enlarged image
});

