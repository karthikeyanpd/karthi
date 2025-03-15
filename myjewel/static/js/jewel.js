        // slider
        let currentSlide = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        function showSlide(index) {
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            // Pause all videos
            document.querySelectorAll('.slide video').forEach(video => {
                video.pause();
            });

            // Move to the current slide
            const offset = -currentSlide * 100;
            slides.style.transform = `translateX(${offset}%)`;

            // Auto-play the video in the current slide (if it exists)
            const currentVideo = slides.children[currentSlide].querySelector('video');
            if (currentVideo) {
                currentVideo.play();
            }
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }