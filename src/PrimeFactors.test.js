import Factorizar from "./PrimeFactors";

describe("Factorizar", () => {
    it("Deberia devolver un valor nulo", () => {
      expect(Factorizar(1)).toEqual([]);
    });
  });

  describe("Factorizar", () => {
    it("Deberia devolver un valor nulo", () => {
      expect(Factorizar(3)).not.toEqual([]);
    });
  });