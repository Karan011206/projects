const API_KEY = "f68cced823131fd27b6a3e53c987e0f6";

async function getWeather() {

    const cityName = document.getElementById("cityName").value.trim();

    const { latitude, longitude } = await getGeoLocation(cityName);

    // Weather API
    const WEATHER_API =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    const response = await fetch(WEATHER_API);

    const data = await response.json();

    console.log(data);

    // Convert Kelvin to Celsius
    const temperature = data.main.temp - 273.15;

    document.getElementById("temp").innerText =
        temperature.toFixed(2) + " °C";
}

async function getGeoLocation(city) {

    const GEO_LOC_API =
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    const response = await fetch(GEO_LOC_API);

    const data = await response.json();

    console.log(data);

    const latitude = data[0].lat;
    const longitude = data[0].lon;

    return { latitude, longitude };
}