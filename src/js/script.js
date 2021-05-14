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

    // Липкое меню

    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (this.pageYOffset < 160 || this.pageYOffset > 1700) {
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

    new WOW().init();

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
        }
    }

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

    //  Аккордеон

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

// Валидация форм регистрации и входа

const signUpform = document.querySelector('#signup__form'),
    fullName = document.querySelector('#fullname'),
    username = document.querySelector('#username'),
    email = document.querySelector('#email'),
    pass = document.querySelector('#password'),
    confirm = document.querySelector('#confirm'),
    checkbox = document.querySelector('#checkbox');


signUpform.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const fullNameValue = fullName.value.trim(),
        usernameValue = username.value.trim(),
        emailValue = email.value.trim(),
        passValue = pass.value.trim(),
        confirmValue = confirm.value.trim();

    if (fullNameValue === '') {
        setErrorFor(fullName, "Fullname can't be blank");
    } else {
        setSuccessFor(fullName);
    }
    if (usernameValue === '') {
        setErrorFor(username, "Username can't be blank");
    } else {
        setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, "Email can't be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Please enter email correctly");
    } else {
        setSuccessFor(email);
    }
    if (passValue === '') {
        setErrorFor(pass, "Password can't be blank");
    } else {
        setSuccessFor(pass);
    }
    if (confirmValue === '') {
        setErrorFor(confirm, "Confirm input can't be blank");
    } else if (passValue !== confirmValue) {
        setErrorFor(confirm, "Password doesn't match");
    } else {
        setSuccessFor(confirm);
    }
    if (checkbox.checked == false) {
        setErrorFor(checkbox, "You need to agree with the rules");
    } else {
        setSuccessFor(checkbox);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    formControl.classList.remove('success');
    formControl.classList.add('error');
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Validation login form

// const loginForm = document.querySelector('#login__form'),
// loginUser = document.querySelector('#username2'),
// loginPass = document.querySelector('#password2');

// loginForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     checkLogIn();
// });

// function checkLogIn() {
//     const loginUserValue = loginUser.value.trim(),
//         loginPassValue = loginPass.value.trim();

//     if (loginUserValue === '') {
//         setErrorFor(loginUser, "Username can't be blank");
//     } else {
//         setSuccessFor(loginUser);
//     }
//     if (loginPassValue === '') {
//         setErrorFor(loginPass, "Password can't be blank");
//     } else {
//         setSuccessFor(loginPass);
//     }
// }