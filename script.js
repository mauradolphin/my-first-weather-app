/** @format */
function showCelciusForecast(response) {
	let dayOneHigh = Math.round(response.data.daily[0].temp.max);
	document.querySelector("#day-1-temp-high").innerHTML = `${dayOneHigh}°C`;
	let dayOneLow = Math.round(response.data.daily[0].temp.min);
	document.querySelector("#day-1-temp-low").innerHTML = `${dayOneLow}°C`;
	let dayTwoHigh = Math.round(response.data.daily[1].temp.max);
	document.querySelector("#day-2-temp-high").innerHTML = `${dayTwoHigh}°C`;
	let dayTwoLow = Math.round(response.data.daily[1].temp.min);
	document.querySelector("#day-2-temp-low").innerHTML = `${dayTwoLow}°C`;
	let dayThreeHigh = Math.round(response.data.daily[2].temp.max);
	document.querySelector("#day-3-temp-high").innerHTML = `${dayThreeHigh}°C`;
	let dayThreeLow = Math.round(response.data.daily[2].temp.min);
	document.querySelector("#day-3-temp-low").innerHTML = `${dayThreeLow}°C`;
	let dayFourHigh = Math.round(response.data.daily[3].temp.max);
	document.querySelector("#day-4-temp-high").innerHTML = `${dayFourHigh}°C`;
	let dayFourLow = Math.round(response.data.daily[3].temp.min);
	document.querySelector("#day-4-temp-low").innerHTML = `${dayFourLow}°C`;
	let dayFiveHigh = Math.round(response.data.daily[4].temp.max);
	document.querySelector("#day-5-temp-high").innerHTML = `${dayFiveHigh}°C`;
	let dayFiveLow = Math.round(response.data.daily[4].temp.min);
	document.querySelector("#day-5-temp-low").innerHTML = `${dayFiveLow}°C`;
}

function showForecast(response) {
	let dayOneHigh = Math.round(response.data.daily[0].temp.max);
	document.querySelector("#day-1-temp-high").innerHTML = `${dayOneHigh}°F`;
	let dayOneLow = Math.round(response.data.daily[0].temp.min);
	document.querySelector("#day-1-temp-low").innerHTML = `${dayOneLow}°F`;
	let dayTwoHigh = Math.round(response.data.daily[1].temp.max);
	document.querySelector("#day-2-temp-high").innerHTML = `${dayTwoHigh}°F`;
	let dayTwoLow = Math.round(response.data.daily[1].temp.min);
	document.querySelector("#day-2-temp-low").innerHTML = `${dayTwoLow}°F`;
	let dayThreeHigh = Math.round(response.data.daily[2].temp.max);
	document.querySelector("#day-3-temp-high").innerHTML = `${dayThreeHigh}°F`;
	let dayThreeLow = Math.round(response.data.daily[2].temp.min);
	document.querySelector("#day-3-temp-low").innerHTML = `${dayThreeLow}°F`;
	let dayFourHigh = Math.round(response.data.daily[3].temp.max);
	document.querySelector("#day-4-temp-high").innerHTML = `${dayFourHigh}°F`;
	let dayFourLow = Math.round(response.data.daily[3].temp.min);
	document.querySelector("#day-4-temp-low").innerHTML = `${dayFourLow}°F`;
	let dayFiveHigh = Math.round(response.data.daily[4].temp.max);
	document.querySelector("#day-5-temp-high").innerHTML = `${dayFiveHigh}°F`;
	let dayFiveLow = Math.round(response.data.daily[4].temp.min);
	document.querySelector("#day-5-temp-low").innerHTML = `${dayFiveLow}°F`;
}

function showData(response) {
	console.log(response);
	let timeZone = response.data.dt;
	console.log(timeZone);
	let now = new Date(timeZone * 1000);
	console.log(now);
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
	let humidity = document.querySelector("#humidity");
	humidity.innerHTML = response.data.main.humidity;
	let currentTemp = Math.round(response.data.main.temp);
	let currentTempDisplay = document.querySelector("#current-temp");
	currentTempDisplay.innerHTML = currentTemp;
	let newTempHigh = Math.round(response.data.main.temp_max);
	let temperatureHigh = document.querySelector("#temp-high");
	temperatureHigh.innerHTML = `${newTempHigh}°F`;
	let tempLow = Math.round(response.data.main.temp_min);
	let temperatureLow = document.querySelector("#temp-low");
	temperatureLow.innerHTML = `${tempLow}°F`;
	document.querySelector("#humidity").innerHTML = response.data.main.humidity;
	let sunriseTime = response.data.sys.sunrise;
	let sunrise = new Date(sunriseTime * 1000);
	let timeString = sunrise.toLocaleTimeString();
	document.querySelector("#sunrise-time-display").innerHTML = timeString;
	let sunsetTime = response.data.sys.sunset;
	let sunset = new Date(sunsetTime * 1000);
	let setTimeString = sunset.toLocaleTimeString();
	document.querySelector("#sunset-time-display").innerHTML = setTimeString;
	let city = response.data.name;
	city = city.toLowerCase();
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=currently,minutely,hourly,alerts&appid=${apiKey}&units=${units}`;
	axios.get(apiUrl).then(showForecast);
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
	} else {
		currentCityDisplay.HTML = null;
		alert("Please enter a city");
	}
	axios.get(apiUrl).then(showData);
}

function showCelciusClick(response) {
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
	let fahrenheitTemp = Math.round(response.data.main.temp);
	let newFahrenheitTemp = document.querySelector("#current-temp");
	newFahrenheitTemp.innerHTML = fahrenheitTemp;
	let fahrenheitHigh = document.querySelector("#temp-high");
	let fahrenheitResultHigh = Math.round(response.data.main.temp_max);
	fahrenheitHigh.innerHTML = `${fahrenheitResultHigh}°F`;
	let fahrenheitLow = document.querySelector("#temp-low");
	let fahrenheitResultLow = Math.round(response.data.main.temp_min);
	fahrenheitLow.innerHTML = `${fahrenheitResultLow}°F`;
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
	let timezone = response.data.dt;
	let now = new Date(timezone * 1000);
	console.log(now);
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
	console.log(`${day} ${month}/${date}/${year} ${hour}:${minutes}`);
	currentDate.innerHTML = `${day} ${month}/${date}/${year} ${hour}:${minutes}`;
	let currentTemp = Math.round(response.data.main.temp);
	let currentTempDisplay = document.querySelector("#current-temp");
	currentTempDisplay.innerHTML = currentTemp;
	let tempHigh = Math.round(response.data.main.temp_max);
	let temperatureHigh = document.querySelector("#temp-high");
	temperatureHigh.innerHTML = `${tempHigh}°F`;
	let tempLow = Math.round(response.data.main.temp_min);
	let temperatureLow = document.querySelector("#temp-low");
	temperatureLow.innerHTML = `${tempLow}°F`;
	let city = response.data.name;
	let currentCityDisplay = document.querySelector("#current-city");
	currentCityDisplay.innerHTML = city;
	document.querySelector("#humidity").innerHTML = response.data.main.humidity;
	let sunriseTime = response.data.sys.sunrise;
	let sunrise = new Date(sunriseTime * 1000);
	let timeString = sunrise.toLocaleTimeString();
	document.querySelector("#sunrise-time-display").innerHTML = timeString;
	let sunsetTime = response.data.sys.sunset;
	let sunset = new Date(sunsetTime * 1000);
	let setTimeString = sunset.toLocaleTimeString();
	document.querySelector("#sunset-time-display").innerHTML = setTimeString;
	city = city.toLowerCase();
	let latitude = response.data.coord.lat;
	let longitude = response.data.coord.lon;
	let apiEndpoint = `https://api.openweathermap.org/data/2.5/onecall`;
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&exclude=current.minutelyt,hourly,alerts&appid=${apiKey}&units=${units}`;
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
	let city = "Sacramento";
	let units = "imperial";
	let apiKey = "52e52eb6f8e287f91bec28fc7ec32f3b";
	let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
	currentCityDisplay.innerHTML = city;
	axios.get(apiUrl).then(showData);
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

let form = document.querySelector("form");
form.addEventListener("submit", search);

let degreesCelcius = document.querySelector("#degrees-celcius");
degreesCelcius.addEventListener("click", clickCelcius);

let degreesFahrenheit = document.querySelector("#degrees-fahrenheit");
degreesFahrenheit.addEventListener("click", clickFahrenheit);

let localTemperature = document.querySelector("#local-search-button");
localTemperature.addEventListener("click", searchLocal);

pageLoad();
