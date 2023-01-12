//  Проверка на моб. устройство

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.iOS() ||
            isMobile.Opera()
        );
    }
}

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

// Бургер меню

const iconMenu = document.querySelector('.menu__icon'),
    menuBody = document.querySelector('.menu__body'),
    userMenuIcon = document.querySelector('.header-cab__menu-icon'),
    userMenuBody = document.querySelector('.header-cab__menu-body');


if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

if (userMenuIcon) {
    userMenuIcon.addEventListener('click', function () {
        document.body.classList.toggle('_lock');
        userMenuIcon.classList.toggle('_active');
        userMenuBody.classList.toggle('_active');
    });
}

// Плавная прокрутка при клике

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

// Липкое меню

const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (this.screenY < 160 || this.screenY > 1700) {
        header.style.visibility = 'visible';
        header.style.opacity = '1';
        if (document.documentElement.clientWidth > 769) {
            header.style.height = '96px';
        } else {
            header.style.height = '80px';
        }
    }
    else {
        header.style.visibility = 'hidden';
        header.style.opacity = '0';
        header.style.height = '0px';
    }
});