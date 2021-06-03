import { ProxyState } from '../AppState.js'
import Forecast from '../Models/Forecast.js'
import { api } from './AxiosService.js'


class WeatherService {
    constructor() {
        console.log('hello from the weather service!')
    }

    /**
    * Uses lat and lon to retrieve 7 day weather forecast
    *
    * @param {{lat: string, lon: string}} forecast
    *
    * @example
    *
    *     foo('hello')
    */
    async getForecast(forecast) {
        console.log(forecast, "from the service")
        const res = await api.get(`onecall?lat=${forecast.lat}&lon=${forecast.lon}&exclude=hourly&units=imperial&appid=7c3a1d0cce21a3e5b83489c0de5b50b8`)
        console.log("response data", res.data)
        const forecasts = res.data.daily.map(d => new Forecast(d))
        forecasts.pop()
        ProxyState.today = forecasts.shift()
        ProxyState.forecasts = forecasts
    }

}

export const weatherService = new WeatherService();