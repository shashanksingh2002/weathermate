const apiKey = 'bnyUUtHRaMvOXkLaAAQL5McmnV9Uolp1';
const getCityData = async city => {
    const apiSearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;
    const apiRequest = await fetch(apiSearch + query);
    const jsonString = await apiRequest.json();
    return jsonString[0];
};
const getWeatherData = async key => {
    const apiSearch = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${key}?apikey=${apiKey}`;
    const apiRequest = await fetch(apiSearch + query);
    const jsonString = await apiRequest.json();
    return jsonString;
};