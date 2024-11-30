// Weather: Calculate and display wind chill
const temperature = 20; // °C
const windSpeed = 10;   // km/h

function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
}

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
    windChillElement.textContent = "N/A";
}
