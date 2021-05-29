//here we will set up the forecast class...this will be the definition of our object to map to when we make the call to our API
export default class Forecast {
   
   //assuming that data is already an incoming object...if it was not already an object you could say constructor({data})
    constructor(data) {
        this.temperature = data.temp.day,
            this.feelsLike = data.feels_like.day,
            this.humidity = data.humidity,
            this.wind = data.wind_speed,
            this.direction = data.wind_deg,
            this.date = new Date(data.dt * 1000).toString().slice(0, 15)
    }

    //template will be built and injected from the weather controller in the _draw function...go to the weather controller for the _draw function

    get Template() {

        return /*html*/`
        <div class="${this.temperature > 80 ? "hot-border" : "cool-border"} col-sm-12 margin-top">
        <div class="row"> 
        <div class="col-sm-12">
        <p>${this.date}:</div>
        <div class ="col-sm-12 col-lg-6">
         <p>Temperature: <span>${this.temperature}</span>F</p>
                    
            </div>
            <div class = "col-sm-12 col-lg-6">
            <p>Feels like: <span>${this.feelsLike}</span>F</p>
            </div>
            <div class = "col-sm-12 col-lg-6">
            <p>Wind speed: <span> ${this.wind}</span> MPH</p>
            </div>
        </div>       
        </div>
                
        `
    }

    get Weather() {
        let template = ''
        this.weather.forEach(element => template += element.weather)
        return template
    }
}