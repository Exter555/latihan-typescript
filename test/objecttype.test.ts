//? ADAPUN OPSIONAL NYA SEPERTI DESCRIPTION?: INI BISA DIGUNAKAN BAIK DI TYPE-ALIAS ATAUPUN OBJECT-TYPE
describe("Object Type", () => {
  it("should return object-type", () => {
    const person: { id: number; name: string } = {
      id: 2,
      name: "Dandy",
    };
    (person.id = 4), (person.name = "Kurniawan");
    console.info(person);
  });
});
