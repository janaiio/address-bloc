const MenuController = require("../controllers/MenuController");

describe("MenuController", () => { //passes MenuController as name of test suite

  beforeEach(() => {
    this.menu = new MenuController();
  });

  describe("#getContactCount()", () => { //defines suite
    it("should return 0 when no contacts are in the book", () =>{
      expect(this.menu.getContactCount()).toBe(0) //set expectation to matcher (=arg)
    });

    it("should return 1 when there is exactly one contact in the book", () =>{
      this.menu.contacts.push("Bob");
      expect(this.menu.getContactCount()).toBe(1)
    });
  });

  describe("#remindMe()", () => {
    it("should return a string containing the text 'Learning is a life-long pursuit'", () => {
      expect(this.menu.remindMe()).toBe('Learning is a life-long pursuit')
    })
  });
});
