import Ship from "../src/ship";

describe("Testing the ship module", () => {
  it("Return error if ships's length is invalid", () => {
    expect(Ship("55")).toBe("Invalid length");
  });

  it("Return error if ships's length is smaller than 1 -1.0", () => {
    expect(Ship(-3)).toBe("Invalid length");
  });

  it("Return error if ships's length is smaller than 1 -2.0", () => {
    expect(Ship(-0)).toBe("Invalid length");
  });

  it("Create new valid ship -1.0", () => {
    expect(Ship(1).length).toBe(1);
  });

  it("Create new valid ship -2.0", () => {
    expect(Ship(4).length).toBe(4);
  });

  it("Check if ship's properties are valid", () => {
    let newShip = Ship(2);
    expect(newShip.length).toBe(2);
  });

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
