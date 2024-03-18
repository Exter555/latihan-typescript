describe("any testing", () => {
  it("should return any value", () => {
    //! any tidak rkomendasi dn jgn terlalu sering digunakan
    // TODO berikut ini bentuk array
    const value: any[] = ["dandy", 100, true];
    console.info(value[0]);
    // TODO berikut ini bentuk object
    // bisa melakukan insert data juga
    const value2: any = {
      id: 1,
      nama: "Dandy",
      status: true,
    };

    value2.address = "Indonesia";
    console.info(value2);
  });
});
