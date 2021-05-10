"use strict"

// @@include('_header.js')

window.addEventListener('DOMContentLoaded', function () {
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

    let faqBtn = document.querySelectorAll('.faq__tabs-btn'),
        faqNav = document.querySelector('.faq__tabs'),
        faqContent = document.querySelectorAll('.faq__content');

    function hideTabContent(active) {
        for (let i = active; i < faqContent.length; i++) {
            faqContent[i].classList.remove('_show');
            faqContent[i].classList.add('_hide');
        }
    }

    hideTabContent(1);

    function showTabContent(disable) {
        if (faqContent[disable].classList.contains('_hide')) {
            faqContent[disable].classList.remove('_hide');
            faqContent[disable].classList.add('_show');
        };
    };

    faqNav.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('faq__tabs-btn')) {
            for (let i = 0; i < faqBtn.length; i++) {
                if (target == faqBtn[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //  Accordions

    const faqItems = document.querySelectorAll('.faq__item'),
        faqItemsHeader = document.querySelectorAll('.faq__item-header');

    faqItemsHeader.forEach((item) => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;

            if (parent.classList.contains('faq__item--active')) {
                parent.classList.remove('faq__item--active');

                if (parent.classList.contains('faq__item--row2')) {
                    parent.parentNode.classList.remove('faq__content--active2');
                } else {
                    parent.parentNode.classList.remove('faq__content--active1');
                }
            } else {
                faqItems.forEach((child) => {
                    child.classList.remove('faq__item--active');
                })

                parent.classList.add('faq__item--active');

                if (parent.classList.contains('faq__item--row2')) {
                    parent.parentNode.classList.add('faq__content--active2');
                    parent.parentNode.classList.remove('faq__content--active1');
                } else {
                    parent.parentNode.classList.add('faq__content--active1');
                    parent.parentNode.classList.remove('faq__content--active2');
                }
            }
        })
    })
});