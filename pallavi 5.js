// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap or other weather API provider
const apiKey = 'YOUR_API_KEY';

function getWeather() {
    const location = document.getElementById('locationInput').value;
    
    if (location) {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
        
        fetch(api)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `
                    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} &deg;C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<p>Could not fetch weather data. Please try again later.</p>`;
            });
    } else {
        alert('Please enter a location');
    }
}
