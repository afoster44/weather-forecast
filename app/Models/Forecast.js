//here we will set up the forecast class...this will be the definition of our object to map to when we make the call to our API
export default class Forecast {

    //assuming that data is already an incoming object...if it was not already an object you could say constructor({data})
    constructor(data) {
        this.max = data.temp.max.toString().slice(0, 2)
        this.min = data.temp.min.toString().slice(0, 2)
        this.feelsLike = data.feels_like.day
        this.humidity = data.humidity
        this.wind = data.wind_speed.toString().slice(0, 2)
        this.direction = data.wind_deg
        this.weather = data.weather[0].main
        this.date = new Date(data.dt * 1000).toString().slice(0, 15)
    }

    //template will be built and injected from the weather controller in the _draw function...go to the weather controller for the _draw function

    get Template() {

        return /*html*/`
        <div class="${this.max >= 80 ? "hot-border" : ""} ${this.max >= 70 && this.max <= 79.99 ? "mild-border" : ""}
            ${this.max <= 69.99 ? "cool-border" : ""} col-sm-3  margin-x margin-bottom">
            <div class="row"> 
                <div class="col-sm-12 d-flex center">
                    <h1 id="dateWeather"           aria-describedby="dateWeather">${this. date} 
                    </h1>
                </div>
                <div class="col-sm-12 d-flex center">
                    <i class="${this.weather.toLowerCase() === "clouds" ? "fas fa-cloud" : ""} ${this.weather.toLowerCase() === "clear" ? "far fa-sun" : ""} ${this.weather.toLowerCase() === "rain" ? "fas fa-cloud-showers-heavy" : ""} " alt="" srcset=""> </i>
                </div>
                <div class ="col-sm-12">
                    <p class="${this.max >= 80 ? "text-hot" : ""} ${this.max >= 70 && this.max < 79.99 ? "text-warm" : ""}
                    ${this.max < 69.99 ? "text-cool" : ""}">H: <span>${this.max}</span>F</p>
                    <p class="">L: <span>${this.min}</span>F</p>
                    <p>Feels like: <span>${this.feelsLike}</span>F</p>  
                    <p>Wind speed: <span> ${this.wind}</span> <img src="${this.wind > 10 ? "https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-wind-icon-png-image_537132.jpg" : " "}" alt="" srcset=""> MPH <i class="${this.direction >= 0 && this.direction <= 89 || this.direction === 360 ? "fas fa-arrow-up" : ""}${this.direction >= 90 && this.direction <= 179 ? "fa fa-arrow-right" : ""} ${this.direction >= 180 && this.direction <= 269 ? "fa fa-arrow-down" : ""} ${this.direction >= 270 && this.direction <= 359 ? "fas fa-arrow-left" : ""}" aria-hidden="true"></i></p>    
                </div>
            </div>       
        </div>
                
        `
    }

    get todayTemplate() {
        return `
        <div class="col-sm-12">
            <h1 class="col-sm-12 d-flex center margin-bottom">
                Today
            </h1>
            <div class="row form-inline">
            <div class="col-sm-6 d-flex center">
                <h1> 
                    
                    <i class="${this.weather.toLowerCase() === "clouds" ? "fas fa-cloud" : ""} ${this.weather.toLowerCase() === "clear" ? "far fa-sun" : ""} ${this.weather.toLowerCase() === "rain" ? "fas fa-cloud-showers-heavy" : ""}" alt="" srcset=""> </i>
                     
                    
                </h1>
                           
            </div>
            <div class="col-sm-6 d-flex center"> 
                <h1> <i class="${this.wind >= 10 ? "fas fa-wind" : ""}" alt="" srcset=""> </i> </h1>
            </div>
            </div>
            
            <div class="row form-inline">
            <h1 class="col-sm-6 d-flex center">
                ${this.max}
            </h1>
            <h1 class="col-sm-6 d-flex center"> 
                ${this.wind}
            </h1> 
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