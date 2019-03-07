//This will be a JavaScript class with methods to handle receiving requests from the user

const inquirer = require ('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
          name: "mainMenuChoice",
          message: "Please choose from an option below: ",
          choices: [
            "Add new contact", //triggers method to add individual contact
            "Current date and time",
            "Reminder",
            "Exit" //exit the program
          ]
      }
    ];
    this.contacts = [];
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
    console.log('addContact called');
    this.main(); //returns main menu
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
