// * Анимация ссылки в футере "Work with us"
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


// * Часы
class Clock {
    selectors = {};

    constructor () {
        this.selectors = {
            timers: document.querySelectorAll('.time'),
        }

        this.updateTimers(this);
        setInterval(this.updateTimers, 1000, this); // Запускаем обновление часов каждую секунду
        setInterval(this.blinkingColons, 500); // Моргание каждые 500 мс (полсекунды)
    }

    updateTimers(timerObject) {
        timerObject.selectors.timers.forEach(timer => {
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
            const colon = '<span class="blinking-colon">:</span>'; // Моргание для двоеточия
    
            // Собираем время с моргающим двоеточием
            timer.innerHTML = `${hour}${colon}${minute.slice(0, 2)} ${ampm}`;
            
            // Делаем элемент видимым после обновления времени
            timer.style.visibility = 'visible';
        })
    }

    // Функция для моргания двоеточия
    blinkingColons() {
        const colons = document.querySelectorAll('.blinking-colon');
        
        colons.forEach(colon => {
            colon.style.visibility = (colon.style.visibility === 'hidden') ? 'visible' : 'hidden';
        });        
    }
}
new Clock();


// * Модальное окно навигации
class MobileNavModal {
    selector = {};

    constructor() {
        this.selector = {
            navIcon: document.querySelector('.nav-icon'),
            closeNavModalIcon: document.querySelector('.close-nav-modal-icon'),
            mobileNavModal: document.querySelector('.mobile-nav-modal'),
        }

        this.initEvents();
    }

    initEvents() {
        this.selector.navIcon.addEventListener('click', () => {
            this.selector.mobileNavModal.style.display = 'block';
        });

        this.selector.closeNavModalIcon.addEventListener('click', () => {
            this.selector.mobileNavModal.style.display = 'none';
        })
    }
}
new MobileNavModal();
