// ТАБЫ

let faqBtn = document.querySelectorAll('.faq__tabs-btn'),
    faqNav = document.querySelector('.faq__tabs'),
    faqContent = document.querySelectorAll('.faq__content');

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