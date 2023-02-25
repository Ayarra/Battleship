import Ship from "../src/ship";

describe("Testing the ship module", () => {
  describe("Creating a ship with valid length", () => {
    it("Return error if ships's length is invalid", () => {
      expect(Ship("55")).toBe("Invalid length");
    });

    it("Return error if ships's length is smaller than 1 -1.0", () => {
      expect(Ship(-3)).toBe("Invalid length");
    });

    it("Return error if ships's length is smaller than 1 -2.0", () => {
      expect(Ship(-0)).toBe("Invalid length");
    });
  });

  describe("Creating a valid ship", () => {
    it("Check if ship's properties are valid", () => {
      let newShip = Ship(2);
      expect(newShip.length).toBe(2);
      expect(newShip.getHits()).toBe(0);
      expect(newShip.getSunk()).toBe(false);
    });

    it("Create new valid ship -1.0", () => {
      expect(Ship(1).length).toBe(1);
      expect(Ship(1).getHits()).toBe(0);
      expect(Ship(1).getSunk()).toBe(false);
    });

    it("Create new valid ship -2.0", () => {
      expect(Ship(4).length).toBe(4);
      expect(Ship(1).getHits()).toBe(0);
      expect(Ship(1).getSunk()).toBe(false);
    });
  });

  describe("Creating a ship with a valid orientation", () => {
    it("Create a new valid ship with a default horizontal orientation -1.0", () => {
      expect(Ship(1).orientation).toBe("horizontal");
    });

    it("Create a new valid ship with a default horizontal orientation -2.0", () => {
      expect(Ship(1, "dsa").orientation).toBe("horizontal");
    });

    it("Create a new valid ship with a default horizontal orientation -3.0", () => {
      expect(Ship(1, 321).orientation).toBe("horizontal");
    });

    it("Create a new valid ship with an horizontal orientation", () => {
      expect(Ship(1, "horizontal").orientation).toBe("horizontal");
    });

    it("Create a new valid ship with an vertical orientation", () => {
      expect(Ship(1, "vertical").orientation).toBe("vertical");
    });
  });

  describe("Testing the hit and sink on ships", () => {
    it("Increment the hits in the ship -1.0", () => {
      let newShip = Ship(2);
      newShip.hit();
      expect(newShip.getHits()).toBe(1);
    });

    it("Increment the hits in the ship -2.0", () => {
      let newShip = Ship(2);
      newShip.hit();
      newShip.hit();
      newShip.hit();

      expect(newShip.getHits()).toBe(3);
    });

    it("Check if a ship is sunk -1.0", () => {
      let newShip = Ship(1);
      newShip.hit();
      expect(newShip.isSunk()).toBe(true);
    });

    it("Check if a ship is sunk -2.0", () => {
      let newShip = Ship(3);
      newShip.hit();
      newShip.hit();
      newShip.hit();
      expect(newShip.isSunk()).toBe(true);
    });

    it("Check if a ship is still safe", () => {
      let newShip = Ship(4);
      newShip.hit();
      newShip.hit();
      newShip.hit();
      expect(newShip.isSunk()).toBe(false);
    });
  });
});
