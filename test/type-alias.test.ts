describe("typedata alias", () => {
  it("with func", () => {
    type Point = {
      x: number;
      y: number;
    };
    function proces(point: Point): void {
      console.info(point.x + point.y);
    }
    proces({ x: 1, y: 3 });
  });
});
