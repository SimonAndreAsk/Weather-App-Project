
//Dynamic content variables//

let emoji = document.getElementById("weather-emoji");

let weather = document.getElementById("weather");

let city = document.getElementById("city");

// When clikcing the search button console logs the value of the input field //

document.getElementById("search-btn").addEventListener("click", () => {
    let searchQuery = document.getElementById("city-search").value;
    console.log(searchQuery);
})


let weatherData = [
    {
        "city": "Gothenburg",
        "weather": "Sunny",
        "emoji": "☀️"
    },
    {
        "city": "Stockholm",
        "weather": "Cloudy",
        "emoji": "☁️"
    },
    {
        "city": "Malmö",
        "weather": "Rainy",
        "emoji": "🌧️"
    },
    {
        "city": "Uppsala",
        "weather": "Thunder",
        "emoji": "⚡"
    }
]

