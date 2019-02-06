$('.weather-temperature').openWeather({
	city: 'Brooklyn'
});

let weather = $.get("http://api.openweathermap.org/data/2.5/weather?lat=41.74263&lon=-74.20012&APPID={53674b26fb20a039273123e306c24d51}")

