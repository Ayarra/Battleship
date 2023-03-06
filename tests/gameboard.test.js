import Gameboard from "../src/gameboard";
import Ship from "../src/ship";

function boardCreate(y, x) {
  const board = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    board.push(row);
    for (let j = 0; j < 10; j++) {
      let target = x.indexOf(i) > -1 && y.indexOf(j) > -1 ? 1 : 0;
      row.push(target);
    }
  }
  return board;
}

describe("Testing the gameboard module", () => {
  it("Initialize a 10x10 boardgame", () => {
    const testBoard = boardCreate([], []);
    expect(Gameboard().board).toEqual(testBoard);
  });

  describe("Filling the gameboard", () => {
    it("Fill a space with a coordinate", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([2], [4]);

      let shipCoord = { x: 2, y: 4 };
      expect(newBoard.fillBoard(shipCoord, Ship())).toBe(1);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });

    it("Fill a space with a coordinate and length (horizontal)", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([2, 3], [4]);

      let shipCoord = { x: 2, y: 4 };

      expect(newBoard.fillBoard(shipCoord, Ship(2))).toBe(1);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });

    it("Fill a space with a coordinate and length (vertical)", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([2], [7, 8, 9]);

      let shipCoord = { x: 2, y: 7 };

      expect(newBoard.fillBoard(shipCoord, Ship(3, "vertical"))).toBe(1);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });

    it("Refuse to fill space if adjacent space is not enough with a coordinate and length (horizontal)", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([], []);

      let shipCoord = { x: 9, y: 4 };
      expect(newBoard.fillBoard(shipCoord, Ship(2))).toBe(0);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });

    it("Refuse to fill space if adjacent space is not enough with a coordinate and length (vertical)", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([], []);

      let shipCoord = { x: 0, y: 8 };
      expect(newBoard.fillBoard(shipCoord, Ship(3, "vertical"))).toBe(0);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });

    it("Refuses to fill space if adjacent space is not free with a coordinate and length", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([0, 1], [0]);

      let shipCoord1 = { x: 0, y: 0 };
      let shipCoord2 = { x: 0, y: 0 };
      newBoard.fillBoard(shipCoord1, Ship(2));

      expect(newBoard.fillBoard(shipCoord2, Ship(3))).toBe(0);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });

    it("Refuses to fill space if adjacent space is not free with a coordinate and length and orientation (horizontal)", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([0, 1, 2], [0]);

      let shipCoord1 = { x: 0, y: 0 };
      let shipCoord2 = { x: 1, y: 0 };
      newBoard.fillBoard(shipCoord1, Ship(3));

      expect(newBoard.fillBoard(shipCoord2, Ship(3, "horizontal"))).toBe(0);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });

    it("Refuses to fill space if adjacent space is not free with a coordinate and length and orientation (vertical)", () => {
      let newBoard = Gameboard();
      const testBoard = boardCreate([5], [3, 4, 5]);

      let shipCoord1 = { x: 5, y: 3 };
      let shipCoord2 = { x: 5, y: 4 };
      newBoard.fillBoard(shipCoord1, Ship(3, "vertical"));

      expect(newBoard.fillBoard(shipCoord2, Ship(3, "vertical"))).toBe(0);
      expect(newBoard.getBoard()).toEqual(testBoard);
    });
  });

  describe("Attacking the gameboard", () => {
    let newBoard = Gameboard();

    newBoard.fillBoard({ x: 0, y: 0 }, Ship(3, "vertical"));
    newBoard.fillBoard({ x: 1, y: 0 }, Ship(4, "horizontal"));

    it("attacking a full space", () => {
      expect(newBoard.receiveAttack({ x: 0, y: 0 })).toBe(1);
      expect(newBoard.getBoard()).toEqual([
        [-1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]);
    });
    it("attacking an empty space", () => {
      expect(newBoard.receiveAttack({ x: 3, y: 3 })).toBe(1);
      expect(newBoard.getBoard()).toEqual([
        [-1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]);
    });
    it("attacking a destroyed space", () => {
      expect(newBoard.receiveAttack({ x: 3, y: 3 })).toBe(0);
      expect(newBoard.getBoard()).toEqual([
        [-1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]);
    });
  });
});
