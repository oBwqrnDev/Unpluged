document.addEventListener("DOMContentLoaded", function() {
    // Hero Section Scroll Animations
    const hero = document.querySelector('.hero');
    const downloadBtn = document.querySelector('.download-btn');

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Scroll with offset for sticky header
                behavior: 'smooth'
            });
        });
    });

    // Parallax Effect on Hero Section (Scroll-based)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset;
        
        // Subtle opacity and transform effects on scroll to prevent the section from becoming too dark
        if (currentScroll > 100) {
            hero.style.opacity = 1 - currentScroll / 1500;
            hero.style.transform = `translateY(${currentScroll / 4}px)`;
        } else {
            hero.style.opacity = 1;
            hero.style.transform = `translateY(0px)`;
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    });

    // Hover Effect on Download Button (subtle transition for premium feel)
    downloadBtn.addEventListener('mouseover', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '4px 10px 25px rgba(0, 0, 0, 0.2)';
    });

    downloadBtn.addEventListener('mouseout', function() {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        this.style.transform = 'translateY(0px)';
        this.style.boxShadow = '2px 8px 15px rgba(0, 0, 0, 0.3)';
    });

    // Sticky Header Effect on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
        } else {
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        }
    });

    // Smooth Scroll to Top Button (Appears after scrolling down)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scroll-to-top-btn');
    document.body.appendChild(scrollToTopBtn);

    // Scroll to Top Button Event Listener
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show Scroll to Top Button After Scrolling Down 200px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});
