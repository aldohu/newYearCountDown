const year = document.querySelector('.year');
const days = document.querySelector('.days h2');
const hours = document.querySelector('.hours h2');
const minutes = document.querySelector('.minutes h2');
const seconds = document.querySelector('.seconds h2');

function updateCountdown() {
	const currentDate = new Date();
	const getSeconds = currentDate.getSeconds();
	const getHours = currentDate.getHours();
	const getMinutes = currentDate.getMinutes();
	const getDays = currentDate.getDate();

	const getYear = currentDate.getFullYear();

	year.innerHTML = getYear;

	const lastDayOfYear = new Date(getYear, 11, 31);

	// Calculate the time difference in milliseconds between the current date and the last day of the year
	const timeDiff = Math.abs(currentDate.getTime() - lastDayOfYear.getTime());

	// Calculate the number of milliseconds in a day
	const millisecondsPerDay = 24 * 60 * 60 * 1000;

	// Calculate the number of days left by dividing the time difference by milliseconds per day
	const daysPassed = Math.floor(timeDiff / millisecondsPerDay);

	days.innerHTML = daysPassed;
	hours.innerHTML = 24 - getHours;
	minutes.innerHTML = 60 - getMinutes;
	seconds.innerHTML = 60 - getSeconds;
}

// Call the updateCountdown function every second (1000 milliseconds)
setInterval(updateCountdown, 1000);
