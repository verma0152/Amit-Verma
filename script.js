// script.js
// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
}

// Skill Animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill').forEach(skill => {
        const percent = skill.dataset.percent;
        skill.querySelector('.progress').style.width = percent;
    });
});

// Publication Filter
function filterPublications(category) {
    document.querySelectorAll('.publication-item').forEach(item => {
        item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
    });
    
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});