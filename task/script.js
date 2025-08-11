document.addEventListener('DOMContentLoaded', function() {
    const testimonialsSlider = document.querySelector(".testimonials-slider");
    if (testimonialsSlider) {
        var swiper = new Swiper(testimonialsSlider, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: { 
                delay: 4000, 
                disableOnInteraction: false, 
            },
            pagination: { 
                el: ".swiper-pagination", 
                clickable: true, 
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                992: { slidesPerView: 3, spaceBetween: 30 }
            }
        });
    }

    // contact form on the contact page
    const contactPageForm = document.getElementById('contactPageForm');
    if (contactPageForm) {
        const formMessage = contactPageForm.querySelector('#form-message') || document.createElement('div');
        if(!formMessage.id) {
            formMessage.id = 'form-message';
            formMessage.className = 'mt-3';
            contactPageForm.appendChild(formMessage);
        }

        contactPageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Contact Page Form submitted!');
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.style.color = '#198754';
            setTimeout(() => {
                contactPageForm.reset();
                formMessage.textContent = '';
            }, 5000);
        });
    }
    // Handle the contact form on the home page
    const homeContactForm = document.getElementById('homeContactForm');
    if (homeContactForm) {
        const homeFormMessage = document.getElementById('home-form-message');
        homeContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            homeFormMessage.textContent = 'Thank you! We will get back to you soon.';
            homeFormMessage.style.color = '#fff';
            setTimeout(() => {
                homeContactForm.reset();
                homeFormMessage.textContent = '';
            }, 5000);
        });
    }

     // Handle the contact form on the about page
    const aboutContactForm = document.getElementById('aboutContactForm');
    if (aboutContactForm) {
        const aboutFormMessage = document.getElementById('about-form-message');
        aboutContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            aboutFormMessage.textContent = 'Thank you! Your journey request has been sent.';
            aboutFormMessage.style.color = '#fff';
            setTimeout(() => {
                aboutContactForm.reset();
                aboutFormMessage.textContent = '';
            }, 5000);
        });
    }

    // Active Nav Link Logic
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

});


