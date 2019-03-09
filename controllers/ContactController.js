const inquirer = require("inquirer"); //helps aapp ask for user input
const Contact = require("../db/models").Contact;

module.exports = class ContactController {
  constructor(){
    this.contacts = [];
  }

  addContact(name, phone){
    return Contact.create({name, phone});
  }
}
