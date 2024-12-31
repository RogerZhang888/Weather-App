const elementLocation = document.getElementById("display-location") as HTMLElement;
const elementTemperature = document.getElementById("display-temperature") as HTMLElement;
const elementCondition = document.getElementById("display-condition") as HTMLElement;
const elementFeelsLike = document.getElementById("display-feels-like") as HTMLElement;

function getLocation() {
  const searchResult = document.getElementById("enter-location") as HTMLInputElement;
  if (searchResult.value !== null) {
    return searchResult.value;
  } else {
    window.alert("Please enter a location!");
    return null;
  };
}

async function getWeather() {
  const desiredLocation = getLocation();
  if (!desiredLocation) return null;

  const apiKey: string = "50e34b0e6815453e81892229243112";
  const apiUrl: string = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${desiredLocation}`
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const fetchedLocation: string = data.location.name;
    const fetchedTemperature: number = Math.round(data.current.temp_c);
    const fetchedCondition: string = data.current.condition.text;
    const fetchedFeelsLike: number = Math.round(data.current.feelslike_c);

    elementLocation.innerHTML = fetchedLocation;
    elementTemperature.innerHTML = `${fetchedTemperature.toString()}°`;
    elementCondition.innerHTML = fetchedCondition;
    elementFeelsLike.innerHTML = `Feels like ${fetchedFeelsLike.toString()}°`
    }
  catch(error) {
    console.error("Error fetching weather data:", error);
    window.alert("Unable to fetch weather data. Please try again.");
  }
}

const searchButton = document.getElementById("search-button");
searchButton?.addEventListener("click", (event: MouseEvent) => {
  getWeather();
})


