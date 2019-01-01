class HelloWorld {
    constructor(public message: string) { 
        console.log(`Receiving ${message}`);
    }
}

let hello = {message: 'Hi'} as HelloWorld;
console.log(`Hello world! - ${hello.message}`);

let hello2 = new HelloWorld("I'm here!!!!");
console.log(`Hey you guys! ${hello2.message}`);