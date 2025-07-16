        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
         let currentLang = 'pl';

        function switchLanguage() {
          currentLang = currentLang === 'pl' ? 'cz' : 'pl';
      
          document.querySelectorAll('.lang').forEach(el => {
            const newText = el.getAttribute(`data-${currentLang}`);
            if (newText) el.textContent = newText;
          });
      
          // Aktualizuj oba przyciski (desktop i mobile)
          const desktopBtn = document.getElementById('lang-toggle');
          const mobileBtn = document.getElementById('lang-toggleMobile');
          if (desktopBtn) desktopBtn.textContent = currentLang === 'pl' ? 'PL / CZ' : 'CZ / PL';
          if (mobileBtn) mobileBtn.textContent = currentLang === 'pl' ? 'PL / CZ' : 'CZ / PL';
        }
      
        document.getElementById('lang-toggle')?.addEventListener('click', switchLanguage);
        document.getElementById('lang-toggleMobile')?.addEventListener('click', switchLanguage);


        // Testimonial slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');
        let currentSlide = 0;
        
        function showSlide(n) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + testimonialSlides.length) % testimonialSlides.length;
            testimonialSlides[currentSlide].classList.add('active');
        }
        
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
        
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
        
        // Initialize first slide
        showSlide(0);
        
        // Simple smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
       
  