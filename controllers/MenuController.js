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
<<<<<<< HEAD
<<<<<<< HEAD
            "Exit", //exit the program
            "Current date and time",
            "Reminder"
=======
            "Current date and time",
            "Reminder",
            "Exit" //exit the program
>>>>>>> 6ebe82e1d893d72609d5d1cf52c6215f4aaee42f
=======
            "Current date and time",
            "Reminder",
            "Exit" //exit the program
>>>>>>> checkpoint-3-contactsAndDatabase
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
        case "Current date and time":
          this.getDate();
          break;
        case "Reminder":
          this.remindMe();
          break;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        case "Exit":
          this.exit();
          break;
>>>>>>> 6ebe82e1d893d72609d5d1cf52c6215f4aaee42f
=======
        case "Exit":
          this.exit();
          break;
>>>>>>> checkpoint-3-contactsAndDatabase
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
<<<<<<< HEAD
    console.log('addContact called');
    this.main(); //returns main menu
  }

  getContactCount(){
    return this.contacts.length;
=======
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
>>>>>>> checkpoint-3-contactsAndDatabase
  }

  getContactCount(){
    return this.contacts.length;
  }

  getDate(){ //logs the current time and date
    const ts = new Date();
    console.log(ts.toLocaleString());
    this.main();
<<<<<<< HEAD
  }

  remindMe(){ //return a string
    return ('Learning is a life-long pursuit');
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit(); //program will end
=======
>>>>>>> checkpoint-3-contactsAndDatabase
  }

<<<<<<< HEAD
  remindMe(){ //return a string
    return ('Learning is a life-long pursuit');
  }
<<<<<<< HEAD
=======
>>>>>>> 6ebe82e1d893d72609d5d1cf52c6215f4aaee42f
=======

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit(); //program will end
  }

>>>>>>> checkpoint-3-contactsAndDatabase
}
