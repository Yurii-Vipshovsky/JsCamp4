const text = document.querySelector(".footer-bottom-block__text");
const year = new Date().getFullYear();
text.innerHTML = `Copyright @ ${year} <a>Brandoxie<a/>.all right reserved.`
const API_KEY = "d9c10efb927f08eba8b61dc5fee9436c";

function initWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${API_KEY}&units=metric`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let weatherElem = document.querySelector('#weather');
        weatherElem.innerHTML = `Weather in ${data.name} is ${data.weather[0].main} <br>
        Temperature is ${data.main.temp} C`;
    });
}

initWeather();