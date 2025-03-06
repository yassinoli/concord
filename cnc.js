
function animateNumbers(element, start, end, duration) {
    let startTime = null;
    function updateNumber(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = Math.min((currentTime - startTime) / duration, 1);
        let value = Math.floor(progress * (end - start) + start);
        element.innerText = value.toLocaleString(); // تنسيق الأرقام
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    requestAnimationFrame(updateNumber);
}

function startCounting() {
    let statItems = document.querySelectorAll('.stat-number');
    if (!statItems) return;
    
    animateNumbers(statItems[0], 0, 50, 1000);    // من 0 إلى 50 خلال 1 ثانية
animateNumbers(statItems[1], 0, 40000, 1200); // من 0 إلى 40K خلال 1.2 ثانية
animateNumbers(statItems[2], 0, 80000, 1500); // من 0 إلى 80K خلال 1.5 ثانية

}

// تشغيل العد عند التمرير إلى الفوتر
let footer = document.querySelector('.custom-footer');
let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        startCounting();
        observer.disconnect(); // منع التكرار
    }
}, { threshold: 0.5 });

observer.observe(footer);




function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
};

