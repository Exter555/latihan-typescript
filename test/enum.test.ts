import { customer, data } from "../src/enum";
describe("Enum Method", () => {
  it("should return", () => {
    const showCustomer: customer = {
      id: 1,
      nama: "Dandy",
      type: data.GOLD,
    };

    console.info(showCustomer);
  });
});
