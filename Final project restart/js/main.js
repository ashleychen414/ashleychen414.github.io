let latitude = ''
let longitude = ''


console.log(crag)
if (crag === 'gunks') {
   latitude = -74.2046;
    longitude = 41.7248;}
else if (crag === 'powerlinez') {
    latitude = -74.162 ;
    longitude = 41.144;
}
else if (crag === 'ice-pond') {
    latitude= -73.622;
    longitude = 41.451;
}
else if (crag === 'central-park') {
    latitude = -73.9654;
    longitude = 40.7829; 
}
;

let api = $.get('http://api.openweathermap.org/data/2.5/weather?lang=en&lat='+latitude+'&lon='+longitude+'&appid=53674b26fb20a039273123e306c24d51')

api.done(function(data){
    let location=data;
    let humidity = `${data.main.humidity}%`;
    let temperature = data.main.temp;
    let minTemperature = data.main.temp_min;
    let maxTemperature = data.main.temp_max;
    let weatherDescription = data.weather[0].description;
    let windspeed = data.wind.speed;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    let clouds = `${data.clouds.all}%`;
   console.log(data)
    console.log(clouds)
    console.log(weatherDescription)
   
    // windspeed as miles per hour
    windspeed = Math.round((data.wind.speed)*2.24) + 'mph'

	// define temperature as fahrenheit
    temperature = Math.round(((temperature - 273.15) * 1.8) + 32) + '°F';

    // define min temperature as fahrenheit
    minTemperature = Math.round(((minTemperature - 273.15) * 1.8) + 32) + '°F';

    // define max temperature as fahrenheit
    maxTemperature = Math.round(((maxTemperature - 273.15) * 1.8) + 32) + '°F';

    // format time function
		const formatTime = function(unixTimestamp) {

			// define milliseconds using unix time stamp
			const milliseconds = unixTimestamp * 1000;

			// create a new date using milliseconds
			const date = new Date(milliseconds);

			// define hours
			let hours = date.getHours();

			// if hours are greater than 12
			if(hours > 12) {

				// calculate remaining hours in the day
				let hoursRemaining = 24 - hours;

				// redefine hours as the reamining hours subtracted from a 12 hour day
				hours = 12 - hoursRemaining;
			}

			// define minutes
			let minutes = date.getMinutes();

			// convert minutes to a string
			minutes = minutes.toString();

			// if minutes has less than 2 characters
			if(minutes.length < 2) {

				// add a 0 to minutes
				minutes = 0 + minutes;
			}

			// construct time using hours and minutes
			let time = hours + ':' + minutes;

			return time;
		}
        sunrise =  `${formatTime(sunrise)} AM`,
        sunset = `${formatTime(sunset)} PM`

    $('.weather-temperature').append(`${temperature}`)
    $('.weather-min-temperature').append(`${minTemperature}`)
    $('.weather-max-temperature').append(`${maxTemperature}`)
    $('.weather-description').append(`${weatherDescription}`)
    $('.weather-humidity').append(`${humidity}`)
    $('.weather-wind-speed').append(`${windspeed}`)
    $('.weather-sunrise').append(`${sunrise}`)
    $('.weather-sunset').append(`${sunset}`)
    $('.weather-clouds').append(`${clouds}`)
    $('.weather-summary').append(`${weatherDescription}`)

// if humidity > 100  and temp > 32 display rain.png
// else if humidity <100 and >50 and temp > 32 display mist
// else if humidity <50 and temp > 32 display 
// else display snow.png
// 
})

