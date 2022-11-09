window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude
            lat = position.coords.latitude;

            const proxy = 'https://openweathermap.org/forecast5';
            const api = `${proxy}https://api.openweathermap.org/data/2.5/forecast?lat=${25.761681}&lon=${-80.191788}&appid=${myKey}`
            const myKey = "3a59a75112325956d03debbfb275b374"; 

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const { temperature, summary } = data.currently;
                // set dom //
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
            }); 
        });
    }
});