const API_KEY = "a712818a61b72ecfee46b05c55579e46";

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector(".weather span:first-child");
            const city = document.querySelector(".weather span:last-child");
            // const name = data.name;
            // const weather = data.weather[0].main;
            // console.log(name, weather);
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${Math.floor(
                data.main.temp - 273.15
            )} °C`;
        });
}

function onGeoError() {
    alert("no weather service available");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
