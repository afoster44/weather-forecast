import ValuesController from "./Controllers/ValuesController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  weatherController = new WeatherController();
}

window["app"] = new App();
