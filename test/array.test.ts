describe("testing", () => {
  it("should return array object", () => {
    const name: string[] = ["eko", "kurniawan", "kanedi"];
    console.log(name);
  });
  it("readonly array", () => {
    const hobies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.info(hobies);
    // ! tidak bisa melakukan pengisian data lagi karena hanya readonly / khusus membaca
    // ! seperti hobies[0] = "Turu"
  });

  it("tuple di typescript", () => {
    const person: readonly [string, number, string] = ["Dandy", 200, "Anugrah"];
    console.info(person[0]);

    // ! sama  tidak bisa juga melakukan pengisian data
  });
});
