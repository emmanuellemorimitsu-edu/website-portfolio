window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Logic for background change
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('section, header');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            // Updated to use your CSS variable for the active link color
            a.style.color = 'var(--accent-color)';
        } else {
            // Updated to use your CSS variable for regular links
            a.style.color = 'var(--text-color)';
        }
    });
});

// --- Intersection Observer for About Section ---
const aboutSection = document.querySelector('.about-section');
const observerOptions = {
    threshold: 0.2 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

if (aboutSection) {
    observer.observe(aboutSection);
}