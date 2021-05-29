import { weatherService } from "../Services/WeatherService.js";
import { ProxyState } from "../AppState.js";


//private draw will build out the template with the data existing in the proxy state
function _draw() {
    let forecasts = ProxyState.forecasts
    let template = ""
    forecasts.forEach(fore => template += fore.Template)
    // console.log(template)
    document.getElementById('forecast').innerHTML = template
    console.log(ProxyState.forecasts)
}


//public
export default class WeatherController {
    constructor() {
        //below is the listener watching over forecasts in the proxy state. whenever the data is affected in the forecasts array within the proxy state the listener will then run the _draw function. Data will no always live in the proxy state therefore we do not need to draw on page load...if we needed to we would then also call _draw() above ProxyState.on()
        ProxyState.on("forecasts", _draw)
        console.log('hello from the weather controller')
    }


    //function to call to our service that will stop the page from reloading on submission of data, will build out the form from the event being passed in and will then build the object to send through to the api to get a response.
    getForecast(event) {
        event.preventDefault();
        const form = event.target
        console.log('getting forecast', form)
        const forecast = {
            lat: form.lat.value,
            lon: form.lon.value
        }
        weatherService.getForecast(forecast)
    }
}