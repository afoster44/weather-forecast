import { weatherService } from "../Services/WeatherService.js";
import { ProxyState } from "../AppState.js";


//private
function _draw(){
        let forecast = ProxyState.forecast
        let template = ""
        forecast.forEach(fore => template += fore.Template)
        // console.log(template)
        document.getElementById('forecast').innerHTML = template
        console.log(ProxyState.forecast)
}


//public
export default class WeatherController {
    constructor(){
        ProxyState.on("forecast", _draw)
        _draw()
        console.log('hello from the weather controller')
    }

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