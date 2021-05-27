import { weatherApi } from './AxiosService.js'


class WeatherService {
    constructor(){
        console.log('hello from the weather service!')
    }

    async getForecast(forecast) {
        const res = await weatherApi.get(`onecall?lat=${forecast.lat}&lon=${forecast.lon}&exclude=hourly,daily&appid={API key}`)
        console.log(res.data)
    }

}

export const weatherService = new WeatherService();