//here we will set up the forecast class...this will be the definition of our object to map to when we make the call to our API
export default class Forecast {
   
   //assuming that data is already an incoming object...if it was not already an object you could say constructor({data})
    constructor(data) {
        this.max = data.temp.max,
            this.min = data.temp.min,
            this.feelsLike = data.feels_like.day
            this.humidity = data.humidity,
            this.wind = data.wind_speed,
            this.direction = data.wind_deg,
            this.weather = data.weather[0].main,
            this.date = new Date(data.dt * 1000).toString().slice(0, 15)
    }

    //template will be built and injected from the weather controller in the _draw function...go to the weather controller for the _draw function

    get Template() {

        return /*html*/`
        <div class="${this.max >= 80 ? "hot-border" : ""} ${this.max >= 70 && this.max <= 79.99 ? "mild-border" : ""}
        ${this.max <= 69.99 ? "cool-border" : ""} col-sm-4 m-auto margin-top bg-light">
        <div class="row"> 
        <div class="col-sm-12">
        <p>${this.date}: ${this.weather} <img src="${this.weather.toLowerCase() === "clouds" ? "https://png.pngtree.com/png-vector/20190214/ourlarge/pngtree-vector-cloudy-icon-png-image_450295.jpg" : "http://simpleicon.com/wp-content/uploads/sun.png"}" alt="" srcset=""></div>
        <div class ="col-sm-12 col-lg-6">
         <p>H: <span>${this.max}</span>F</p>
         <p>L: <span>${this.min}</span>F</p>
                    
            </div>
            <div class = "col-sm-12 col-lg-6">
            <p>Feels like: <span>${this.feelsLike}</span>F</p>
            </div>
            <div class = "col-sm-12 col-lg-6">
            <p>Wind speed: <span> ${this.wind}</span> <img src="${this.wind > 10 ? "https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-wind-icon-png-image_537132.jpg" : " "}" alt="" srcset=""> MPH <i class="${this.direction >= 0 && this.direction <= 89 || this.direction === 360 ? "fa fa-arrow-up" : ""}${this.direction >= 90 && this.direction <=179 ? "fa fa-arrow-right" : ""} ${this.direction >= 180 && this.direction <=269 ? "fa fa-arrow-down" : ""} ${this.direction >= 270 && this.direction <= 359 ? "fa fa-arrow-left" : ""}" aria-hidden="true"></i></p>
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