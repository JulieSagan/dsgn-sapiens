// Ищем только ссылки с классом .icon-link
document.querySelectorAll('.footer-link.icon-link').forEach(link => {
    const img = link.querySelector('img');
    
    if (img) {  // Проверяем, существует ли img внутри ссылки
        const originalSrc = 'https://cdn.prod.website-files.com/66a8d582fa5812f0be1bf6f0/66aaa8439d326b204a7b41e3_arrow-elbow-down-right--white.svg'; // Белая иконка
        const hoverSrc = 'https://cdn.prod.website-files.com/66a8d582fa5812f0be1bf6f0/66aa0c79be47fd296dff5949_arrow-elbow-down-right.svg'; // Черная иконка

        img.src = originalSrc;  // Установите исходную иконку

        link.addEventListener('mouseover', () => {
            img.src = hoverSrc;  // Меняйте иконку на черную при ховере
        });

        link.addEventListener('mouseout', () => {
            img.src = originalSrc;  // Возвращайте белую иконку при убирании курсора
        });
    } else {
        console.log("Image not found in this icon-link.");
    }
});


// Часы
function updateClock() {
    console.log("Updating clock...");
    const clockElement = document.getElementById('time');
    if (clockElement) {
        const now = new Date();

        const options = {
            timeZone: 'Asia/Nicosia',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true // AM/PM формат
        };

        let timeString = now.toLocaleTimeString('en-US', options);
        
        // Разделяем часы и минуты, чтобы вставить моргающее двоеточие
        const [hour, minute] = timeString.split(':');
        const ampm = timeString.slice(-2); // AM или PM
        const colon = '<span id="blinking-colon">:</span>'; // Моргание для двоеточия

        // Собираем время с моргающим двоеточием
        clockElement.innerHTML = `${hour}${colon}${minute.slice(0, 2)} ${ampm}`;
        
        // Делаем элемент видимым после обновления времени
        clockElement.style.visibility = 'visible';
    } else {
        console.log("Element with ID 'time' not found.");
    }
}

// Запускаем обновление часов каждую секунду
setInterval(updateClock, 1000);
updateClock();

// Функция для моргания двоеточия
setInterval(() => {
    console.log("Toggling colon visibility...");
    const colon = document.getElementById('blinking-colon');
    if (colon) {
        colon.style.visibility = (colon.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }
}, 500); // Моргание каждые 500 мс (полсекунды)

// TODO: проблема с исчезновением появлением иконок

// Открытие и закрытие бургер-меню
const menuIcon = document.querySelector('.menu-icon');
const closeIconWrapper = document.querySelector('.x-icon--wrapper');
const mobileMenu = document.querySelector('.navigation-items');

// Открытие меню
menuIcon.addEventListener('click', () => {
    // Показываем мобильное меню
    mobileMenu.style.opacity = '1'; // Плавно отображаем меню
    mobileMenu.style.visibility = 'visible'; // Показываем меню
    // Скрываем бургер-иконку
    menuIcon.style.display = 'none';
    // Показываем иконку крестика
    closeIconWrapper.style.display = 'block';
});

// Закрытие меню
closeIconWrapper.addEventListener('click', () => {
    // Плавно скрываем мобильное меню
    mobileMenu.style.opacity = '0';
    mobileMenu.style.visibility = 'hidden'; // Скрываем после изменения прозрачности
    // Показываем бургер-иконку
    menuIcon.style.display = 'block';
    // Скрываем иконку крестика
    closeIconWrapper.style.display = 'none';
});