document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Initialize the slider
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Show a specific slide
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Handle index bounds
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        slides[currentSlide].classList.add('active');
    }

    // Next slide function
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Previous slide function
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event listeners for slider controls
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetInterval();
        });

        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetInterval();
        });
    }

    // Reset interval after manual navigation
    function resetInterval() {
        clearInterval(slideInterval);
        startSlider();
    }

    // Start the slider
    startSlider();

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const destinationInput = document.getElementById('destination');
            
            // Get error message elements
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const destinationError = document.getElementById('destinationError');
            
            // Reset error messages
            nameError.textContent = '';
            emailError.textContent = '';
            destinationError.textContent = '';
            
            // Validate name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your name';
                nameInput.focus();
                return false;
            }
            
            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.focus();
                return false;
            }
            
            // Validate destination
            if (!destinationInput.value) {
                destinationError.textContent = 'Please select a destination';
                destinationInput.focus();
                return false;
            }
            
            // If all validations pass, show success message
            alert('Thank you, we\'ll be in touch soon!');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});