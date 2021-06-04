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
})