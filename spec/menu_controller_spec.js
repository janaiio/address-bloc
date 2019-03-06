const MenuController = require("../controllers/MenuController");

describe("MenuController", () => { //passes MenuController as name of test suite
  describe("#getContactCount()", () => { //defines suite
    it("should return 0 when no contacts are in the book", () =>{
      const menu = new MenuController();
      expect(menu.getContactCount()).toBe(0); //set expectation to matcher (=arg)
    });
  });
});
