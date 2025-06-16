// Language Switching
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update language switcher buttons
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === (lang === 'ar' ? 'العربية' : 'english')) {
            btn.classList.add('active');
        }
    });

    // Update all elements with data-ar and data-en attributes
    document.querySelectorAll('[data-ar]').forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            const placeholder = element.getAttribute(`data-${lang}-placeholder`);
            if (placeholder) {
                element.placeholder = placeholder;
            }
        } else {
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });
}

// Booking Form Handler
function handleBooking(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        guests: document.getElementById('guests').value,
        checkIn: document.getElementById('check-in').value,
        checkOut: document.getElementById('check-out').value,
        reservedRooms: document.getElementById('reserved-rooms').value
    };

    // Calculate number of days
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Format dates to Arabic style
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatDateEn = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Create formatted WhatsApp message
    const message = `✨ *طلب حجز جديد* ✨\n` +
        `🏨 *فندق سفنكس 1 سنتر* 🏨\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `👤 *معلومات الضيف: / Guest Information:*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📝 *الاسم: / Name:*\n` +
        `${formData.name}\n\n` +
        `📧 *البريد الإلكتروني: / Email:*\n` +
        `${formData.email}\n\n` +
        `📱 *رقم الهاتف: / Phone Number:*\n` +
        `${formData.phone}\n\n` +
        `👥 *عدد الأفراد: / Number of Guests:*\n` +
        `${formData.guests}\n\n` +
        `📅 *تفاصيل الحجز: / Booking Details:*\n` +
        `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `📥 *تاريخ الوصول: / Check-in Date:*\n` +
        `${formatDate(formData.checkIn)} / ${formatDateEn(formData.checkIn)}\n\n` +
        `📤 *تاريخ المغادرة: / Check-out Date:*\n` +
        `${formatDate(formData.checkOut)} / ${formatDateEn(formData.checkOut)}\n\n` +
        `🗓️ *عدد الليالي: / Number of Nights:*\n` +
        `${daysDiff} ليالٍ / ${daysDiff} nights` +
        `\n\n` +
        `🚪 *الغرف المحجوزة: / Reserved Rooms:*\n` +
        `${formData.reservedRooms}`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp business number
    const whatsappNumber = '201060430907';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    
    // Add animation class
    if (navLinks.classList.contains('active')) {
        navLinks.style.animation = 'slideInUp 0.5s ease-out';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navLinks.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close mobile menu when clicking on a link or language button
document.querySelectorAll('.nav-links a, .language-switcher button').forEach(element => {
    element.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Add event listener for mobile menu button
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
});

// Initialize language based on browser settings
document.addEventListener('DOMContentLoaded', () => {
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = browserLang === 'ar' ? 'ar' : 'en';
    switchLanguage(defaultLang);
});

// Initialize Swiper for room galleries
document.addEventListener('DOMContentLoaded', () => {
    const roomSwipers = document.querySelectorAll('.room-images .swiper');
    
    roomSwipers.forEach((swiperContainer) => {
        new Swiper(swiperContainer, {
            // Enable loop
            loop: true,
            
            // Enable autoplay
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            
            // Enable pagination
            pagination: {
                el: swiperContainer.querySelector('.swiper-pagination'),
                clickable: true,
            },
            
            // Enable navigation
            navigation: {
                nextEl: swiperContainer.querySelector('.swiper-button-next'),
                prevEl: swiperContainer.querySelector('.swiper-button-prev'),
            },
            
            // Enable effect
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            
            // Enable keyboard control
            keyboard: {
                enabled: true,
            },
            
            // Enable mousewheel control
            mousewheel: {
                enabled: true,
            },
            
            // Enable touch events
            touchRatio: 1,
            touchAngle: 45,
            
            // Enable grab cursor
            grabCursor: true,
            
            // Enable preload images
            preloadImages: true,
            lazy: true,
            
            // Enable watch over changes
            watchOverflow: true,
            
            // Enable observer
            observer: true,
            observeParents: true
        });
    });
});

// Scroll Progress Bar
document.addEventListener('DOMContentLoaded', () => {
    // Create scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Update progress bar on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
});

// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="spinner"></div>';
    document.body.appendChild(loading);

    // Remove loading screen after animation
    setTimeout(() => {
        loading.remove();
    }, 1500);
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animations
    document.querySelectorAll('.service-card, .room-card, .footer-section').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 