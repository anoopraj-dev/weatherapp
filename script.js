


const btn = document.querySelector('.search button');
const searchBox=document.querySelector('.search input');
const weatherIcon=document.querySelector('.weather-icon');

const APIkey = '76000d5a2afa7d7884be85e90ac4644d';
const baseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city) {
    const response = await fetch(baseURL + city +`&appid=${APIkey}`);
    var data = await response.json();

    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity +'%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';


    if(data.weather[0].main=='Clouds'){
        weatherIcon.src='./images/clouds.png';
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src='./images/clear.png';
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src='./images/rain.png';
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='./images/drizzle.png';
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src='./images/mist.png';
    }
   
    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none';

  }

}

btn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})




