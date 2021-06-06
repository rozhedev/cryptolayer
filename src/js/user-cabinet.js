'use strict'

window.addEventListener('DOMContentLoaded', function () {
    const headerCabTime = document.querySelector('.header-cab__time');

    function zeroInDate(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

    function getDate() {
        let currentDate = new Date(),
            currentDay = zeroInDate(currentDate.getUTCDate()),
            currentMonth = zeroInDate(currentDate.getUTCMonth() + 1),
            currentYear = zeroInDate(currentDate.getUTCFullYear()),
            currentHours = zeroInDate(currentDate.getUTCHours()),
            currentMinutes = zeroInDate(currentDate.getUTCMinutes()),
            currentSeconds = zeroInDate(currentDate.getUTCSeconds());

        return `${currentYear}-${currentMonth}-${currentDay}, ${currentHours}:${currentMinutes}:${currentSeconds}`;
    }

    setInterval(function () {
        headerCabTime.textContent = getDate();
    }, 1000);

    // const refferalBtn = document.querySelector('.dashboard__refferal-btn'); //* Работает

    // refferalBtn.addEventListener('click', function () {
    //     let refferalLink = document.querySelector('#partner-link');
    //     refferalLink.select();
    //     document.execCommand('copy');
    //     alert(`Copied the text ${refferalLink.value}`);
    // })

    const refferalBtns = document.querySelectorAll('.dashboard__refferal-btn');

    refferalBtns.forEach((refferalBtn) => {
        refferalBtn.addEventListener('click', function () {
            const refferalLink = document.querySelector('.partner-link');
            refferalLink.select();
            document.execCommand('copy');
            alert(`Copied the text ${refferalLink.value}`);
        })
    })
})