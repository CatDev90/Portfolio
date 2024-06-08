let xhr = new XMLHttpRequest(); 

const api = 'da2c6e20adb2e4056a5da39327c3f36f'; 

function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosistion);
    }else {
        console.error = 'Geolocation is not supported by this browser.';
    }
}

function showPosistion(position){
    lat = position.coords.latitude;
    long = position.coords.longitude;
}

getLocation();


let query = document.querySelector('[name="q"]');
let weatherForm = document.querySelector('[name="weather-form"]'); 
let temp = document.querySelector('#temp');
let description = document.querySelector('#description');
let  humidity = document.querySelector('#humidity');
let  windSpeed = document.querySelector('#wind-speed');


//icon selectors
let weatherIcons = document.querySelector('#weather-icon');
let windIcon = document.querySelector('#wind-icon');
let humidityIcon = document.querySelector('#humidity-icon');



let responseData; 

weatherForm.addEventListener('submit',function(event){
    
    
    event.preventDefault();
    console.log(query.value);
    
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${query.value}&appid=${api}&units=metric`); 
    
    xhr.onreadystatechange = function(){ 
        
        if(xhr.readyState === 4){ 
            
            if(xhr.status === 200){ 

        responseData = JSON.parse(xhr.responseText); 
        
        console.log(responseData); 
        console.log(responseData.main.temp);
        console.log(responseData.main.humidity); 
        console.log(responseData.wind.speed); 
        console.log(responseData.weather[0].description); 
        
        temp.textContent = responseData.main.temp + '°C';
        description.textContent = responseData.weather[0].description;
        humidity.textContent = responseData.main.humidity + '%';
        windSpeed.textContent = responseData.wind.speed + 'km/h';
        
        if (responseData.weather[0].description.includes('snow')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/13d@2x.png'
        }else if (responseData.weather[0].description.includes('clear sky')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/01d@2x.png'
        }else if (responseData.weather[0].description.includes('Drizzle')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/09d@2x.png'
        }else if (responseData.weather[0].description.includes('thunderstorms')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/11d@2x.png'
        }else if (responseData.weather[0].description.includes('mist')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/50d@2x.png'
        }else if (responseData.weather[0].description.includes('rain')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/10d@2x.png'
        }else if (responseData.weather[0].description.includes('clouds')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/04d@2x.png'
        }else if (responseData.weather[0].description.includes('sleet')){
            weatherIcons.src = 'https://openweathermap.org/img/wn/18d@2x.png'
        }
        
        
        windIcon.src ='./images/humidity.png';
        humidityIcon.src ='./images/wind.png';
        
        
        
    }else{ 
        
        console.error("Requset failed with status: " + xhr.status);
        
    } 
    
 } 

} 

xhr.send(); 

})


let locationButton = document.querySelector('#location');

let responseDataLoc;

let lat;
let long;

locationButton.addEventListener('click', function(event){

    event.preventDefault();

    function getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosistion);
        }else {
            console.error = 'Geolocation is not supported by this browser.';
        }
    }

    function showPosistion(position){
        lat = position.coords.latitude;
        long = position.coords.longitude;
    }

    getLocation();

    console.log(long + ' ' + lat);

    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                responseDataLoc = JSON.parse(xhr.responseText);


                temp.textContent = responseDataLoc.main.temp + '°C';
                description.textContent = responseDataLoc.weather[0].description;
                humidity.textContent = responseDataLoc.main.humidity + '%';
                windSpeed.textContent = responseDataLoc.wind.speed + 'km/h';
            
                if (responseDataLoc.weather[0].description.includes('snow')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/13d@2x.png'
                }else if (responseDataLoc.weather[0].description.includes('clear sky')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/01d@2x.png'
                }else if (responseDataLoc.weather[0].description.includes('Drizzle')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/09d@2x.png'
                }else if (responseDataLoc.weather[0].description.includes('thunderstorms')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/11d@2x.png'
                }else if (responseDataLoc.weather[0].description.includes('mist')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/50d@2x.png'
                }else if (responseDataLoc.weather[0].description.includes('rain')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/10d@2x.png'
                }else if (responseDataLoc.weather[0].description.includes('clouds')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/04d@2x.png'
                }else if (responseDataLoc.weather[0].description.includes('sleet')){
                    weatherIcons.src = 'https://openweathermap.org/img/wn/18d@2x.png'
                }
                
                    windIcon.src ='./images/humidity.png';
                    humidityIcon.src ='./images/wind.png';

                }else {
                console.error('Resquest failed with status:' + xhr.status);
                } 
            }
        }   

        xhr.send();



})

