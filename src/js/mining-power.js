'use strict'

window.addEventListener('DOMContentLoaded', function () {
    const miningDataItems = document.querySelectorAll('.mining-power__item'),
        dropdownItems = document.querySelectorAll('.mining-power__item-dropdown');

    dropdownItems.forEach((item) => {
        item.addEventListener('click', function () {
            const parent = item.parentNode;

            if (parent.classList.contains('mining-power__item--active')) {
                parent.classList.remove('mining-power__item--active');
                item.classList.remove('mining-power__item-dropdown--active');
            } else {
                miningDataItems.forEach((child) => {
                    child.classList.remove('mining-power__item--active');
                })
                dropdownItems.forEach((item) => {
                    item.classList.remove('mining-power__item-dropdown--active');
                })
                parent.classList.add('mining-power__item--active');
                item.classList.add('mining-power__item-dropdown--active');
            }
        })
    })

    const rangeInputs = document.querySelectorAll('.mining-power__item-range'),
        rangeSpans = document.querySelectorAll('.mining-power__item-span');

    rangeInputs.forEach((rangeItem) => {
        rangeItem.addEventListener('input', function () {
            rangeSpans.forEach((spanItem) => {
                if (rangeItem.getAttribute('id') == spanItem.getAttribute('data-range')) {
                    spanItem.textContent = rangeItem.value;
                }
            })
        })
    })
})