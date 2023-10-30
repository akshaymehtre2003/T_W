document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('locationInput');
    const getRecommendationsBtn = document.getElementById('getRecommendationsBtn');
    const weatherInfo = document.getElementById('weather-info');

    getRecommendationsBtn.addEventListener('click', () => {
        const location = locationInput.value;
        if (location) {
            // Call the function to get weather data
            getWeatherData(location);
        }
    });

    function getWeatherData(city) {
        const apiKey = 'ca983c09f6f21f5f7ab3a1ac3963246c'; // Replace with your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const cityName = data.name;

                const weatherHtml = `
                    <h2>Weather in ${cityName}</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Condition: ${weatherDescription}</p>
                `;

                weatherInfo.innerHTML = weatherHtml;
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
            });
    }
});


