export default class Forecast {
    constructor(data) {
        this.temperature = data.temp,
        this.feelsLike = data.feels_like,
        this.humidity = data.humidity,
        this.wind = data.wind_speed
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 forecast">
            <div class="row">
                <div class = col-sm-6>
                ${this.temperature}
                <div/>
                <div class = col-sm-6>
                ${this.feelsLike}
                <div/>
            <div/>
        </div>
        `
    }
}