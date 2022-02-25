const form = document.querySelector('form');
const cityName = form.querySelector('#searchBar');
const imgContainer = document.querySelector('.imgContainer');
const dataDisplay = document.querySelector('.info');
const updateUI = (data,city) => {
    const dayTime = data[0].IsDayTime;
    const temperature = data[0].Temperature;
    const weatherText = data[0].WeatherText;
    const weatherIcon = data[0].WeatherIcon;
    
    /* IF LOOPS AND ADDING IMAGE ACCORDING TO WEATHER CONDITION AND INJECTING HTML */
    
    imgContainer.style.display = 'block';
     
};
form.addEventListener('submit', (data) => {
    data.preventDefault();
    const city = cityName.value;
    form.reset();
    const cityData = getCityData(city);
    cityData.then((data) => {
        const weatherData = getWeatherData(data.Key);
        return weatherData;
    }).then((data) => {
        updateUI(data,city);
    }).catch((err) => {
        console.log(err.message);
    });
});