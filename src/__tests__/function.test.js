import{ getPercents } from "./homework_17_6-2/function";

describe("test getPercents", () => {
  it("getPercents (10*0)/100 to equal 0", () => {
    const result = getPercent(1, 0);
    expect(result).toBe(0);
  }),
    it("getPercents (14*35) to equal 4.9", () => {
      const result = multiply(14,35);
      expect(result).toBe(4.9);
    });
    it("getPercents (14*35) to equal 6", () => {
      const result = multiply(14,35);
      expect(result).toBe(6);
    });
});