describe("Union test", () => {
  // Union Type
  //   it("should |", () => {
  //     let nama: string | number | boolean = "Eko";
  //     console.info(nama);

  //     nama = 12;
  //     console.info(nama);
  //     nama = true;
  //     console.info(nama);
  //   });

  it("with conditional", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 1;
      } else {
        return !value;
        ` `;
      }
    }
    expect(process("Testing")).toBe("Testing");
    expect(process("Dandy")).toBe("DANDY");
    expect(process(12)).toBe(13);
    expect(process(true)).toBe(false);
  });
});
