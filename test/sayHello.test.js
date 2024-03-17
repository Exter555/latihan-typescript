"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var say_hello_1 = require("../src/say_hello");
describe("sayHello", function () {
    it("Should Return Hello Dandy", function () {
        expect((0, say_hello_1.sayHello)("Dandy")).toBe("Hello Dandy");
    });
});
