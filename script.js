/** @format */
function showCelciusForecast(response) {
	let dayOneHigh = Math.round(response.data.daily[1].temp.max);
	let dayOneLow = Math.round(response.data.daily[1].temp.min);
	let dayTwoHigh = Math.round(response.data.daily[2].temp.max);
	let dayTwoLow = Math.round(response.data.daily[2].temp.min);
	let dayThreeHigh = Math.round(response.data.daily[3].temp.max);
	let dayThreeLow = Math.round(response.data.daily[3].temp.min);
	let dayFourHigh = Math.round(response.data.daily[4].temp.max);
	let dayFourLow = Math.round(response.data.daily[4].temp.min);
	let dayFiveHigh = Math.round(response.data.daily[5].temp.max);
	let dayFiveLow = Math.round(response.data.daily[5].temp.min);

	document.querySelector("#day-1-temp-high").innerHTML = `${dayOneHigh}°C`;
	document.querySelector("#day-1-temp-low").innerHTML = `${dayOneLow}°C`;
	document.querySelector("#day-2-temp-high").innerHTML = `${dayTwoHigh}°C`;
	document.querySelector("#day-2-temp-low").innerHTML = `${dayTwoLow}°C`;
	document.querySelector("#day-3-temp-high").innerHTML = `${dayThreeHigh}°C`;
	document.querySelector("#day-3-temp-low").innerHTML = `${dayThreeLow}°C`;
	document.querySelector("#day-4-temp-high").innerHTML = `${dayFourHigh}°C`;
	document.querySelector("#day-4-temp-low").innerHTML = `${dayFourLow}°C`;
	document.querySelector("#day-5-temp-high").innerHTML = `${dayFiveHigh}°C`;
	document.querySelector("#day-5-temp-low").innerHTML = `${dayFiveLow}°C`;
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

	return days[day];
}

function showForecast(response) {
	console.log(response.data.daily);
	let forecast = response.data.daily[1].dt;
	let forecastDates = document.querySelector("#forecast-day-1-date");
	forecastDates.innerHTML = formatDay(forecast);
	let uvi = document.querySelector("#uvi");
	let uviValue = response.data.current.uvi;
	uvi.innerHTML = Math.round(uviValue);
	let dayOneIconElement = document.querySelector("#icon-1");
	let dayOneIcon = response.data.daily[1].weather[0].icon;
	dayOneIconElement.setAttribute("src", `images/${dayOneIcon}.png`);
	dayOneIconElement.setAttribute(
		"alt",
		response.data.daily[1].weather[0].description
	);
	let dayTwoIconElement = document.querySelector("#icon-2");
	let dayTwoIcon = response.data.daily[2].weather[0].icon;
	dayTwoIconElement.setAttribute("src", `images/${dayTwoIcon}.png`);
	dayTwoIconElement.setAttribute(
		"alt",
		response.data.daily[2].weather[0].description
	);
	let dayThreeIconElement = document.querySelector("#icon-3");
	let dayThreeIcon = response.data.daily[3].weather[0].icon;
	dayThreeIconElement.setAttribute("src", `images/${dayThreeIcon}.png`);
	dayThreeIconElement.setAttribute(
		"alt",
		response.data.daily[3].weather[0].description
	);
	let dayFourIconElement = document.querySelector("#icon-4");
	let dayFourIcon = response.data.daily[4].weather[0].icon;
	dayFourIconElement.setAttribute("src", `images/${dayFourIcon}.png`);
	dayFourIconElement.setAttribute(
		"alt",
		response.data.daily[4].weather[0].description
	);
	let dayFiveIconElement = document.querySelector("#icon-5");
	let dayFiveIcon = response.data.daily[5].weather[0].icon;
	dayFiveIconElement.setAttribute("src", `images/${dayFiveIcon}.png`);
	dayFiveIconElement.setAttribute(
		"alt",
		response.data.daily[5].weather[0].description
	);
	let dayOneHigh = Math.round(response.data.daily[1].temp.max);
	let dayOneLow = Math.round(response.data.daily[1].temp.min);
	let dayTwoHigh = Math.round(response.data.daily[2].temp.max);
	let dayTwoLow = Math.round(response.data.daily[2].temp.min);
	let dayThreeHigh = Math.round(response.data.daily[3].temp.max);
	let dayThreeLow = Math.round(response.data.daily[3].temp.min);
	let dayFourHigh = Math.round(response.data.daily[4].temp.max);
	let dayFourLow = Math.round(response.data.daily[4].temp.min);
	let dayFiveHigh = Math.round(response.data.daily[5].temp.max);
	let dayFiveLow = Math.round(response.data.daily[5].temp.min);

	document.querySelector("#day-1-temp-high").innerHTML = `${dayOneHigh}°F`;
	document.querySelector("#day-1-temp-low").innerHTML = `${dayOneLow}°F`;
	document.querySelector("#day-2-temp-high").innerHTML = `${dayTwoHigh}°F`;
	document.querySelector("#day-2-temp-low").innerHTML = `${dayTwoLow}°F`;
	document.querySelector("#day-3-temp-high").innerHTML = `${dayThreeHigh}°F`;
	document.querySelector("#day-3-temp-low").innerHTML = `${dayThreeLow}°F`;
	document.querySelector("#day-4-temp-high").innerHTML = `${dayFourHigh}°F`;
	document.querySelector("#day-4-temp-low").innerHTML = `${dayFourLow}°F`;
	document.querySelector("#day-5-temp-high").innerHTML = `${dayFiveHigh}°F`;
	document.querySelector("#day-5-temp-low").innerHTML = `${dayFiveLow}°F`;
}

function showData(response) {
	console.log(response);
	let fahrenheitLink = document.querySelector("#degrees-fahrenheit");
	let celciusLink = document.querySelector("#degrees-celcius");
	fahrenheitLink.classList.add("active");
	celciusLink.classList.remove("active");
	let currentIcon = response.data.weather[0].icon;
	let iconElement = document.querySelector("#today-icon");
	iconElement.setAttribute("src", `images/${currentIcon}.png`);
	iconElement.setAttribute("alt", response.data.weather[0].description);
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
	dateElement.innerHTML = displaySearchedDate(timestamp * 1000);
	let feelsLike = response.data.main.feels_like;
	let feelsLikeElement = document.querySelector("#feels-like-display");
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	feelsLikeUnit.innerHTML = "°F";
	let city = response.data.name;
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=currently,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

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
	fahrenheitLink.classList.remove("active");
	celciusLink.classList.add("active");
	let celciusTemp = Math.round(response.data.main.temp);
	let newCelciusTemp = document.querySelector("#current-temp");
	newCelciusTemp.innerHTML = celciusTemp;
	let celciusHigh = document.querySelector("#temp-high");
	let resultHigh = Math.round(response.data.main.temp_max);
	celciusHigh.innerHTML = `${resultHigh}°C`;
	let celciusLow = document.querySelector("#temp-low");
	let resultLow = Math.round(response.data.main.temp_min);
	celciusLow.innerHTML = `${resultLow}°C`;
	let city = response.data.name;
	city = city.toLowerCase();
	let feelsLike = response.data.main.feels_like;
	let feelsLikeElement = document.querySelector("#feels-like-display");
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	feelsLikeUnit.innerHTML = "°C";
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "metric";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=current.minutelyt,hourly,alerts&appid=${apiKey}&units=${units}`;
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
	fahrenheitLink.classList.add("active");
	celciusLink.classList.remove("active");
	let fahrenheitTemp = Math.round(response.data.main.temp);
	let newFahrenheitTemp = document.querySelector("#current-temp");
	newFahrenheitTemp.innerHTML = fahrenheitTemp;
	let fahrenheitHigh = document.querySelector("#temp-high");
	let fahrenheitResultHigh = Math.round(response.data.main.temp_max);
	fahrenheitHigh.innerHTML = `${fahrenheitResultHigh}°F`;
	let fahrenheitLow = document.querySelector("#temp-low");
	let fahrenheitResultLow = Math.round(response.data.main.temp_min);
	fahrenheitLow.innerHTML = `${fahrenheitResultLow}°F`;
	let feelsLike = response.data.main.feels_like;
	let feelsLikeElement = document.querySelector("#feels-like-display");
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	feelsLikeUnit.innerHTML = "°F";
	let city = response.data.name;
	city = city.toLowerCase();
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=current.minutelyt,hourly,alerts&appid=${apiKey}&units=${units}`;
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
	fahrenheitLink.classList.add("active");
	celciusLink.classList.remove("active");
	let currentIcon = response.data.weather[0].icon;
	let iconElement = document.querySelector("#today-icon");
	iconElement.setAttribute("src", `images/${currentIcon}.png`);
	iconElement.setAttribute("alt", response.data.weather[0].description);
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
	feelsLikeElement.innerHTML = Math.round(feelsLike);
	let feelsLikeUnit = document.querySelector("#feels-like-unit");
	feelsLikeUnit.innerHTML = "°F";
	let timestamp = response.data.dt;
	dateElement.innerHTML = displaySearchedDate(timestamp * 1000);
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=current.minutelyt,hourly,alerts&appid=${apiKey}&units=${units}`;

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
