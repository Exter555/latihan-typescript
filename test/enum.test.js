"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("../src/enum");
describe("Enum Method", function () {
    it("should return", function () {
        var showCustomer = {
            id: 1,
            nama: "Dandy",
            type: enum_1.data.GOLD,
        };
        console.info(showCustomer);
    });
});
