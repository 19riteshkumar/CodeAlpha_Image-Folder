document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0; 
    function openLightbox(index) {
        currentIndex = index;
        const currentImage = galleryImages[currentIndex];

        lightboxImg.src = currentImage.getAttribute('data-full'); 
        captionText.innerHTML = currentImage.alt; 

        
        lightbox.classList.add('active'); 
    }

    
    function closeLightbox() {
        lightbox.classList.remove('active'); 
        setTimeout(() => {
            lightbox.style.display = 'none'; 
            lightboxImg.src = ''; 
            captionText.innerHTML = ''; 
        }, 300); 
    }

    function showPrevImage() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        openLightbox(currentIndex);
    }

    function showNextImage() {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        openLightbox(currentIndex); 
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex'; 
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) { 
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) { 
            closeLightbox();
        }
    });
});