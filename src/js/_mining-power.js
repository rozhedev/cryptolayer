const miningDataItems = document.querySelectorAll('.mining-power__item'),
    dropdownItems = document.querySelectorAll('.mining-power__item-dropdown');

console.log(dropdownItems);
dropdownItems.forEach((item) => {
    item.addEventListener('click', function () {
        const parent = item.parentNode;

        if (parent.classList.contains('mining-power__item--active')) {
            parent.classList.remove('mining-power__item--active');
        } else {
            miningDataItems.forEach((child) => {
                child.classList.remove('mining-power__item--active');
            })
            parent.classList.add('mining-power__item--active');
        }
    })
})