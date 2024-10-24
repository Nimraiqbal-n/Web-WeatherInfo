const apikey = "e500e16c6e7a46f7da2ce99ac36b9ac6";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.getElementById("icon");

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.ok) {
        const data = await response.json();
        let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("Wind").innerHTML = data.wind.speed + " km/h";
        weathericon.src = icon; 
    } else {
        alert("City not found. Please try again.");
    }
    document.querySelector(".weather").style.display="block";
}
searchbtn.addEventListener("click", () => {
    const city = searchbox.value;
    checkWeather(city);
});
