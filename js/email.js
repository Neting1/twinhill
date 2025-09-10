// Sticky Header
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                hamburger.innerHTML = navMenu.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });

        // Form submission with EmailJS
        const contactForm = document.getElementById('contactForm');
        const formStatus = document.getElementById('formStatus');
        const submitBtn = document.getElementById('submitBtn');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e){
                e.preventDefault();
                
                // Show sending status
                formStatus.className = 'form-status sending';
                formStatus.textContent = 'Sending your message...';
                submitBtn.disabled = true;
                
                // Prepare the template parameters
                const templateParams = {
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value,
                    to_email: 'xeonsysitenterprise@gmail.com' // Your receiving email
                    }
            });
                    
                // Send the email using EmailJS
                function sendMail(){
            let params = {
                name : document.getElementById("name").value,
                email : document.getElementById("email").value,
                subject : document.getElementById("subject").value,
                message : document.getElementById("message").value
        }

        emailjs.send("service_olttz89","template_47oet7i",params).then(alert("Message Sent Successfully"))
        }

        // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        if (faqQuestions.length > 0) {
            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const answer = question.nextElementSibling;
                    answer.classList.toggle('active');
                    
                    const icon = question.querySelector('i');
                    if (answer.classList.contains('active')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                });
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                // Check if we're on the same page
                if (document.querySelector(targetId)) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    // If it's a different page, navigate to that page
                    const page = targetId.substring(1); // Remove the # symbol
                    window.location.href = page + '.html';
                }
            });
        });

        // Initialize when document is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Set active page in navigation
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.nav-menu a');
            
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href');
                if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Add animation to elements on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.service-card, .team-member, .value-item, .process-step');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animated elements
            const animatedElements = document.querySelectorAll('.service-card, .team-member, .value-item, .process-step');
            animatedElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Run on scroll and initially
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll();
        }
        );
    };