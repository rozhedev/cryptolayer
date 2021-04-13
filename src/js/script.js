"use strict"

// @@include('_header.js')


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

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
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

// ТАБЫ

// const tabsBtn = document.querySelectorAll('.faq__tabs-btn');
// const tabsItems = document.querySelectorAll('.faq__item');

// tabsBtn.forEach(onTabClick);

// function onTabClick(item) {
//     item.addEventListener('click', function () {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute('data-tab');
//         let currentTab = document.querySelector(tabId);

//         if (!currentBtn.classList.contains('active-tab')) {
//             tabsBtn.forEach(function (item) {
//                 item.classList.remove('active-tab');
//                 tabsBtn.classList.remove('active-tab');
//             });

//             tabsItems.forEach(function (item) {
//                 item.classList.remove('active-tab');
//                 tabsItems.classList.remove('actibe-tab')
//             });

//             currentBtn.classList.add('active-tab');
//             currentTab.classList.add('active-tab');
//         }
//     });
// }

// document.querySelector('.faq__tabs-btn').click();