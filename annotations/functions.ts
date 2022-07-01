// 366. Annotations Around Functions
const add = ( a: number, b: number ): number => {
    return a + b;
}

// 367. Inference Around Functions
const substract = ( a: number, b: number ) => {
    a - b;
}

// 368. Annotations for Anonymous Functions
function devide( a: number, b: number ): number {
    return a / b;
}

// 369. Void and Never
const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const throwErrorMore = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
}

// 370. Destructuring with Annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast);
    console.log(forecast.date);
    console.log(forecast.weather);
};

logWeather(todaysWeather);

//ES2015
const logWeatherJS = ( { date, weather } ) => {
    //...
};

//TS
const logWeatherTS = ( { date, weather }: { date: Date, weather: string }): void => {
    console.log( date);
    console.log( weather);
};
