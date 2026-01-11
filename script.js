// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('شكراً لك! تم إرسال رسالتك.');
    this.reset();
});

// Add some dynamic content or effects
window.addEventListener('load', function() {
    console.log('موقع الحسحيسة محمل بنجاح!');
});
