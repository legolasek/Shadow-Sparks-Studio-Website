// Add smooth scrolling to internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active states to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Add responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Add modal window functionality
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
    modal.classList.add('open');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
});

window.addEventListener('click', e => {
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});

// Add form validation
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    let errors = 0;

    // Validate fields
    // ...

    if (errors > 0) {
        e.preventDefault();
    }
});

// Add animations when scrolling
window.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
});

// Add transition effects when changing pages
const pageTransitions = document.querySelector('.page-transitions');
const anchorLinks = document.querySelectorAll('nav a');

anchorLinks.forEach(link => {
    link.addEventListener('mouseover', e => {
        link.style.backgroundColor = "#ddd";
    });

    link.addEventListener('mouseout', e => {
        link.style.backgroundColor = "";
    });

    link.addEventListener('click', e => {
        e.preventDefault();

        let url = link.getAttribute('href');

        pageTransitions.classList.add('active');

        setTimeout(() => {
            window.location = url;
        }, 500);
    });
});

// Add animated background
document.body.classList.add('animated-bg');

// Additional Improvements:

// Smooth scroll to internal links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Improve menu button interactivity
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
});

// Add animations to elements on the page
const animatedElements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('animated');
        }
    });
});
