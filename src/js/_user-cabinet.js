
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

if (headerCabTime) {
	setInterval(function () {
	    headerCabTime.textContent = getDate();
	}, 1000);
}

// * COPY LINK

const refferalBtns = document.querySelectorAll('.dashboard__refferal-btn');

if (refferalBtns && refferalBtns.length > 0) {
	refferalBtns.forEach((refferalBtn) => {
	    refferalBtn.addEventListener('click', function () {
	        const refferalLink = document.querySelector('.partner-link');
	        refferalLink.select();
	        document.execCommand('copy');
	        alert(`Copied the text ${refferalLink.value}`);
	    })
	})
}