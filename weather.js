const apiKey = 'f81b1988d545f10e2fd45f05acc4d2bb';
const city = 'Саранск';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('temperature').textContent = data.main.temp;
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('windSpeed').textContent = data.wind.speed;
            
            const directions = ['Север', 'Северо-Восток', 'Восток', 'Юго-Восток', 'Юг', 'Юго-Запад', 'Запад', 'Северо-Запад'];
            const direction = directions[Math.round(data.wind.deg / 45) % 8];
            document.getElementById('windDirection').textContent = direction;

        } else {
            document.getElementById('weather').textContent = 'Не удалось получить данные о погоде';
        }
    } catch (error) {
        console.error('Ошибка получения данных:', error);
        document.getElementById('weather').textContent = 'Ошибка загрузки данных';
    }
}

getWeather();