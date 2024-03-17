import { sayHello } from "../src/say_hello";
describe("sayHello", function (): void {
  it("Should Return Hello Dandy", function (): void {
    expect(sayHello("Dandy")).toBe("Hello Dandy");
  });
});
