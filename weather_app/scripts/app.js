const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {

    console.log(data);

    // updating the card and the details
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    //Could also use destructuring, it is the same thing but shorter
    //const {cityDetails, weather} = data;

    //Update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // Check if the card has the active class
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };

    //Update the night/day & icon
    let timeSrc = null;
    if (weather.IsDayTime){
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    };

    //Could also use ternary operator
    // timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);


    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
};


// const updateCity = async (city) => {
//     const cityDetails = await getCity(city);
//     const weather = await getWeather(cityDetails.Key);

//     //Update UI with new city
//     return {cityDetails: cityDetails, weather: weather};
// };

cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //Update UI with new city, use .then method to parse the data from promise
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    //Set local storage
    localStorage.setItem('city', city);

});

if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
};