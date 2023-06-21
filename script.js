const apiKey = "f816da443ddeb826d825bca09d64b3c4";
const city = "Miami";
const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(api)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data)
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const location = data.name;

        document.getElementById("location").innerHTML = location;
        document.getElementById("temperature").innerHTML = temperature;
        document.getElementById("description").innerHTML = description;
    });