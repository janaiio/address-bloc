//This will be a JavaScript class with methods to handle receiving requests from the user

const inquirer = require('inquirer');
const ContactController = require('./ContactController');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
          name: "mainMenuChoice",
          message: "Please choose from an option below: ",
          choices: [
            "Add new contact", //triggers method to add individual contact
            "View all contacts",
            "Search for a contact",
            "Current date and time",
            "Reminder",
            "Exit" //exit the program
          ]
      }
    ];
    this.book = new ContactController();
  }

  main(){
    console.log('Welcome to AddressBloc!'); //logs welcome message
    inquirer.prompt(this.mainMenuQuestions).then((response) =>{ //pass control to inquirer to ask menu question
      switch(response.mainMenuChoice){
        case "Add new contact" :
          this.addContact();
          break;
        case "View all contacts":
          this.getContacts();
          break;
        case "Search for a contact":
          this.search();
          break;
        case "Current date and time":
          this.getDate();
          break;
        case "Reminder":
          this.remindMe();
          break;
        case "Exit":
          this.exit();
          break;
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clear(){
    console.log("\x1Bc"); //ANSI escape sequence to clear console
  }

  addContact(){
    this.clear();
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
  }

  getContacts(){
    this.clear();
    this.book.getContacts().then((contacts) => {
      for (let contact of contacts) {
        console.log(`
          name: ${contact.name}
          phone number: ${contact.phone}
          email: ${contact.email}
          ---------------`
        );
      }
      this.main();
    }).catch((err) => {
      console.log(err);
      this.main();
    });
  }

  search(){
    inquirer.prompt(this.book.searchQuestions)
    .then((target) => {
      this.book.search(target.name)
      .then((contact) => {
        if(contact === null){
          this.clear();
          console.log("contact not found");
          this.search();
        } else {
          this.showContact(contact);
        }

      });
    })
    .catch((err) => {
      console.log(err);
      this.main();
    });
  }

  showContact(contact){
    this._printContact(contact);
    inquirer.prompt(this.book.showContactQuestions)
    .then((answer) => {
      switch(answer.selected){
        case "Delete contact":
          this.delete(contact);
          break;
        case "Main menu":
          this.main();
          break;
        default:
          console.log("Something went wrong.");
          this.showContact(contact);
      }
    })
    .catch((err) => {
      console.log(err);
      this.showContact(contact);
    });
  }

  delete(contact){
    inquirer.prompt(this.book.deleteConfirmQuestions)
    .then((answer) => {
      if(answer.confirmation){
        this.book.delete(contact.id);
        console.log("contact deleted!");
        this.main();
      } else {
        console.log("contact not deleted");
        this.showContact(contact);
      }
    })
    .catch((err) => {
      console.log(err);
      this.main();
    });
  }

  _printContact(contact){
    console.log(`
      name: ${contact.name}
      phone number: ${contact.phone}
      email: ${contact.email}
      ---------------`
    );
  }

  getContactCount(){
    return this.contacts.length;
  }

  getDate(){ //logs the current time and date
    const ts = new Date();
    console.log(ts.toLocaleString());
    this.main();
  }

  remindMe(){ //return a string
    return ('Learning is a life-long pursuit');
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit(); //program will end
  }

}
