// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'ca983c09f6f21f5f7ab3a1ac3963246c';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Function to fetch weather data for a city
async function getWeather(city) {
  try {
    const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('Weather data not available.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to display weather information
function displayWeatherInfo(city, weather) {
  const weatherInfo = `
    <h2>Weather in ${city}</h2>
    <p>Temperature: ${weather.main.temp}°C</p>
    <p>Weather: ${weather.weather[0].description}</p>
    <p>Humidity: ${weather.main.humidity}%</p>
  `;
  document.getElementById('weather-info').innerHTML = weatherInfo;
}

// Example: Fetch weather data for a specific city (e.g., Mumbai)
const cityToSearch = 'Mumbai';

getWeather(cityToSearch)
  .then((weatherData) => {
    displayWeatherInfo(cityToSearch, weatherData);
  })
  .catch((error) => {
    console.error(error);
  });
