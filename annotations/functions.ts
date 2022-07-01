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