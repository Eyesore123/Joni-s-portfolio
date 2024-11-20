class Forecast {
    constructor() {
        this.key = '179YXfKNmWDy3nSSUxXcicmHMz5Hrs0O';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        //Update UI with new city
        return { cityDetails, weather };
    }

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}

// const key = '179YXfKNmWDy3nSSUxXcicmHMz5Hrs0O';

// const getWeather = async (id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// };


// First we create an async function to get the city
// Base constant to hold the base url
// Query constant to hold the query, meaning what we are looking for
//We want a string, so we create a Query string to hold the api key and the city
// Then we create a fetch call to get the data and for that we need to combine the base and the query
// Then we return the data using await and the json method

// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// };


// getCity('Rantasalmi')
// .then(data => {return getWeather(data.Key);
// }).then (data => {console.log(data);
// }).catch(err => console.log(err));

