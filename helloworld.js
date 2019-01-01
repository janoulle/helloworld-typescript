"use strict";
var HelloWorld = /** @class */ (function () {
    function HelloWorld(message) {
        this.message = message;
        console.log("Receiving " + message);
    }
    return HelloWorld;
}());
var hello = { message: 'Hi' };
console.log("Hello world! - " + hello.message);
var hello2 = new HelloWorld("I'm here!!!!");
console.log("Hey you guys! " + hello2.message);
//# sourceMappingURL=helloworld.js.map