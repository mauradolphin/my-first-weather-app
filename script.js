/** @format */
function showCelciusForecast(response) {
	let daily = response.data.daily;
	daily.forEach(function (response, index) {
		if (index > 0 && index < 6) {
			let high = Math.round(response.temp.max);
			let low = Math.round(response.temp.min);
			let tag1 = `#day-`;
			let indexTag = `${index}`;
			let highTag = `-temp-high`;
			let lowTag = `-temp-low`;
			let highTempTag = tag1 + indexTag + highTag;
			let lowTempTag = tag1 + indexTag + lowTag;
			let highElement = document.querySelector(highTempTag);
			let lowElement = document.querySelector(lowTempTag);

			highElement.innerHTML = `${high}°C`;
			lowElement.innerHTML = `${low}°C`;
		}
	});
}

function formatDay(timestamp) {
	let date = new Date(timestamp * 1000);
	let day = date.getDay();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let month = date.getMonth();
	let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	let dayOfWeek = date.getDate();

	month = months[month];
	return days[day] + `<br/><small>  ${month}/${dayOfWeek} </small>`;
}

function showForecast(response) {
	let daily = response.data.daily;
	daily.forEach(function (response, index) {
		if (index > 0 && index < 6) {
			let high = Math.round(response.temp.max);
			let low = Math.round(response.temp.min);
			let tag1 = `#day-`;
			let indexTag = `${index}`;
			let highTag = `-temp-high`;
			let lowTag = `-temp-low`;
			let highTempTag = tag1 + indexTag + highTag;
			let lowTempTag = tag1 + indexTag + lowTag;
			let highElement = document.querySelector(highTempTag);
			let lowElement = document.querySelector(lowTempTag);
			let forecast = response.dt;
			let forecastTag = `#forecast-day-`;
			let forecastTag3 = `-date`;
			let forecastTagFull = forecastTag + indexTag + forecastTag3;
			let forecastElement = document.querySelector(forecastTagFull);
			let iconTag = `#icon-`;
			let icon = response.weather[0].icon;
			let description = response.weather[0].description;
			let iconTagFull = iconTag + indexTag;
			let iconElement = document.querySelector(iconTagFull);

			highElement.innerHTML = `${high}°F`;
			lowElement.innerHTML = `${low}°F`;
			forecastElement.innerHTML = formatDay(forecast);
			iconElement.setAttribute("src", `images/${icon}.png`);
			iconElement.setAttribute("alt", description);
		}
	});

	let uvi = document.querySelector("#uvi");
	let uviValue = response.data.current.uvi;
	uvi.innerHTML = Math.round(uviValue);
}

function showData(response) {
	console.log(response);
	let fahrenheitLink = document.querySelector("#degrees-fahrenheit");
	let celciusLink = document.querySelector("#degrees-celcius");
	let currentIcon = response.data.weather[0].icon;
	let iconElement = document.querySelector("#today-icon");
	let windElement = document.querySelector("#wind");
	let windSpeed = response.data.wind.speed;
	let description = document.querySelector("#condition-description");
	let conditions = response.data.weather[0].description;
	let humidity = document.querySelector("#humidity");
	let currentTemp = Math.round(response.data.main.temp);
	let currentTempDisplay = document.querySelector("#current-temp");
	let newTempHigh = Math.round(response.data.main.temp_max);
	let temperatureHigh = document.querySelector("#temp-high");
	let tempLow = Math.round(response.data.main.temp_min);
	let temperatureLow = document.querySelector("#temp-low");
	let dateElement = document.querySelector("#full-date-hour");
	let timestamp = response.data.dt;
	let feelsLike = response.data.main.feels_like;
	let feelsLikeElement = document.querySelector("#feels-like-display");
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	let city = response.data.name;
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=currently,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

	fahrenheitLink.classList.add("active");
	celciusLink.classList.remove("active");
	iconElement.setAttribute("src", `images/${currentIcon}-main.png`);
	iconElement.setAttribute("alt", response.data.weather[0].description);
	dateElement.innerHTML = displaySearchedDate(timestamp * 1000);
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	feelsLikeUnit.innerHTML = "°F";
	windElement.innerHTML = Math.round(windSpeed);
	description.innerHTML = conditions;
	humidity.innerHTML = response.data.main.humidity;
	currentTempDisplay.innerHTML = currentTemp;
	temperatureHigh.innerHTML = `${newTempHigh}°F`;
	temperatureLow.innerHTML = `${tempLow}°F`;
	document.querySelector("#humidity").innerHTML = response.data.main.humidity;
	city = city.toLowerCase();
	axios.get(apiUrl).then(showForecast);
}

function showCelciusClick(response) {
	let fahrenheitLink = document.querySelector("#degrees-fahrenheit");
	let celciusLink = document.querySelector("#degrees-celcius");
	let celciusTemp = Math.round(response.data.main.temp);
	let newCelciusTemp = document.querySelector("#current-temp");
	let celciusHigh = document.querySelector("#temp-high");
	let resultHigh = Math.round(response.data.main.temp_max);
	let celciusLow = document.querySelector("#temp-low");
	let resultLow = Math.round(response.data.main.temp_min);
	let city = response.data.name;
	let feelsLike = response.data.main.feels_like;
	let feelsLikeElement = document.querySelector("#feels-like-display");
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "metric";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=current.minutelyt,hourly,alerts&appid=${apiKey}&units=${units}`;

	fahrenheitLink.classList.remove("active");
	celciusLink.classList.add("active");
	newCelciusTemp.innerHTML = celciusTemp;
	celciusHigh.innerHTML = `${resultHigh}°C`;
	celciusLow.innerHTML = `${resultLow}°C`;
	city = city.toLowerCase();
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	feelsLikeUnit.innerHTML = "°C";

	axios.get(apiUrl).then(showCelciusForecast);
}

function clickCelcius(event) {
	event.preventDefault();
	let city = document.querySelector("#current-city").textContent;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
	let units = "metric";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
	axios.get(apiUrl).then(showCelciusClick);
}

function showFahrenheitClick(response) {
	let fahrenheitLink = document.querySelector("#degrees-fahrenheit");
	let celciusLink = document.querySelector("#degrees-celcius");
	let fahrenheitTemp = Math.round(response.data.main.temp);
	let newFahrenheitTemp = document.querySelector("#current-temp");
	let fahrenheitHigh = document.querySelector("#temp-high");
	let fahrenheitResultHigh = Math.round(response.data.main.temp_max);
	let fahrenheitLow = document.querySelector("#temp-low");
	let fahrenheitResultLow = Math.round(response.data.main.temp_min);
	let feelsLike = response.data.main.feels_like;
	let feelsLikeElement = document.querySelector("#feels-like-display");
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	let city = response.data.name;
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=current.minutelyt,hourly,alerts&appid=${apiKey}&units=${units}`;

	fahrenheitLink.classList.add("active");
	celciusLink.classList.remove("active");
	newFahrenheitTemp.innerHTML = fahrenheitTemp;
	fahrenheitHigh.innerHTML = `${fahrenheitResultHigh}°F`;
	fahrenheitLow.innerHTML = `${fahrenheitResultLow}°F`;
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	feelsLikeUnit.innerHTML = "°F";
	city = city.toLowerCase();

	axios.get(apiUrl).then(showForecast);
}

function clickFahrenheit(event) {
	event.preventDefault();
	let city = document.querySelector("#current-city").textContent;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;

	axios.get(apiUrl).then(showFahrenheitClick);
}

function showLocalData(response) {
	let fahrenheitLink = document.querySelector("#degrees-fahrenheit");
	let celciusLink = document.querySelector("#degrees-celcius");
	let currentIcon = response.data.weather[0].icon;
	let iconElement = document.querySelector("#today-icon");
	let windElement = document.querySelector("#wind");
	let windSpeed = response.data.wind.speed;
	let description = document.querySelector("#condition-description");
	let conditions = response.data.weather[0].description;
	let humidity = document.querySelector("#humidity");
	let currentTemp = Math.round(response.data.main.temp);
	let currentTempDisplay = document.querySelector("#current-temp");
	let tempHigh = Math.round(response.data.main.temp_max);
	let temperatureHigh = document.querySelector("#temp-high");
	let tempLow = Math.round(response.data.main.temp_min);
	let temperatureLow = document.querySelector("#temp-low");
	let city = response.data.name;
	let currentCityDisplay = document.querySelector("#current-city");
	let dateElement = document.querySelector("#full-date-hour");
	let feelsLike = response.data.main.feels_like;
	let feelsLikeElement = document.querySelector("#feels-like-display");
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	let timestamp = response.data.dt;
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=current.minutelyt,hourly,alerts&appid=${apiKey}&units=${units}`;

	fahrenheitLink.classList.add("active");
	celciusLink.classList.remove("active");
	iconElement.setAttribute("src", `images/${currentIcon}-main.png`);
	iconElement.setAttribute("alt", response.data.weather[0].description);
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	feelsLikeUnit.innerHTML = "°F";
	dateElement.innerHTML = displaySearchedDate(timestamp * 1000);
	windElement.innerHTML = Math.round(windSpeed);
	description.innerHTML = conditions;
	humidity.innerHTML = response.data.main.humidity;
	currentTempDisplay.innerHTML = currentTemp;
	temperatureHigh.innerHTML = `${tempHigh}°F`;
	temperatureLow.innerHTML = `${tempLow}°F`;
	currentCityDisplay.innerHTML = city;

	document.querySelector("#humidity").innerHTML = response.data.main.humidity;

	axios.get(apiUrl).then(showForecast);
}

function retrievePosition(position) {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

	axios.get(apiUrl).then(showLocalData);
}

function pageLoad() {
	let currentCityDisplay = document.querySelector("#current-city");
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
	let city = "Chicago";
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
	currentCityDisplay.innerHTML = city;

	axios.get(apiUrl).then(showData);
}

function displaySearchedDate(timestamp) {
	let date = new Date(timestamp);
	let hours = date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[date.getDay()];
	let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	let month = months[date.getMonth()];
	let dayOfWeek = date.getDate();
	console.log(day);
	if ((day = "Wednesday")) {
		day = "<small>" + "Wednesday" + "</small>";
	}
	let year = date.getFullYear();
	return `${day} ${month}/${dayOfWeek}/${year} ${hours}:${minutes}`;
}

function displayDate() {
	let now = new Date();
	let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	let month = months[now.getMonth()];
	let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
	let day = days[now.getDay()];
	let hour = now.getHours();
	if (hour < 10) {
		hour = `0${hour}`;
	}
	let minutes = now.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let date = now.getDate();
	let year = now.getFullYear();
	let currentDate = document.querySelector("#full-date-hour");
	currentDate.innerHTML = `${day} ${month}/${date}/${year} ${hour}:${minutes}`;
}

function searchLocal() {
	navigator.geolocation.getCurrentPosition(retrievePosition);
}

function search(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-bar");
	let currentCityDisplay = document.querySelector("#current-city");
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
	let city = searchInput.value;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
	if (searchInput.value) {
		currentCityDisplay.innerHTML = `${city}`;
		axios.get(apiUrl).then(showData);
	} else {
		currentCityDisplay.HTML = null;
		alert("Please enter a city");
	}
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let degreesCelcius = document.querySelector("#degrees-celcius");
degreesCelcius.addEventListener("click", clickCelcius);

let degreesFahrenheit = document.querySelector("#degrees-fahrenheit");
degreesFahrenheit.addEventListener("click", clickFahrenheit);

let localTemperature = document.querySelector("#local-search-button");
localTemperature.addEventListener("click", searchLocal);

pageLoad();
displayDate();
