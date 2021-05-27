import { api } from './AxiosService.js'


class WeatherService {
    constructor() {
        console.log('hello from the weather service!')
    }

    async getForecast(forecast) {
        console.log(forecast, "from the service")
        const res = await api.get(`onecall?lat=${forecast.lat}&lon=${forecast.lon}&exclude=hourly,daily&appid=7c3a1d0cce21a3e5b83489c0de5b50b8`)
        console.log(res)
    }

}

export const weatherService = new WeatherService();