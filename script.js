// changing navbar background owhile scrolling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

// pang smooth scroll
const sections = document.querySelectorAll('section, header');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.style.color = '#007aff';
        } else {
            a.style.color = '#333';
        }
    });
});