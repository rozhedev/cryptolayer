
const miningDataItems = document.querySelectorAll('.mining-power__item'),
    dropdownItems = document.querySelectorAll('.mining-power__item-dropdown');

if (dropdownItems.length > 0) {
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
}

const rangeInputs = document.querySelectorAll('.mining-power__item-range'),
    rangeSpans = document.querySelectorAll('.mining-power__item-span'),
    usedSpans = document.querySelectorAll('.mining-power__item-used'),
    hideBtns = document.querySelectorAll('.mining-power__hide-btn'),
    miningPopup = document.querySelector('.mining-power__popup');

if (rangeInputs.length > 0) {
    rangeInputs.forEach((rangeItem) => {
        rangeItem.addEventListener('input', function () {
            rangeSpans.forEach((spanItem) => {
                if (rangeItem.getAttribute('id') == spanItem.getAttribute('data-range')) {
                    spanItem.textContent = rangeItem.value;
                }
            })
            usedSpans.forEach((usedItem) => {
                if (rangeItem.id == 'bitcoin-range' && usedItem.getAttribute('data-percent-range') == 'bitcoin-range') {
                    usedItem.textContent = `${(+rangeItem.value * 200).toFixed()}%`;
                    return false;
                }
                if (rangeItem.id == 'ethereum-range' && usedItem.getAttribute('data-percent-range') == 'ethereum-range') {
                    usedItem.textContent = `${(+rangeItem.value * 20).toFixed()}%`;
                    return false;
                }
                if ((rangeItem.id == 'litecoin-range' && usedItem.getAttribute('data-percent-range') == 'litecoin-range') || (rangeItem.id == 'dash-range' && usedItem.getAttribute('data-percent-range') == 'dash-range')) {
                    usedItem.textContent = `${(+rangeItem.value * 4).toFixed()}%`;
                    return false;
                }
            })
        })
    })   
}

if (miningPopup) {
	setTimeout(function () {
	    miningPopup.classList.toggle('popup-fade');
	}, 5000);
}

if (hideBtns.length > 0) {
	hideBtns.forEach((hideBtn) => {
	    hideBtn.addEventListener('click', function () {
	        miningPopup.classList.toggle('popup-fade');
	        setTimeout(function () {
	            miningPopup.classList.toggle('popup-fade');
	        }, 5000);
	    })
	})
}