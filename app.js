const inquirer = require('inquirer');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController(); //imports an instance of MenuController stored in menu

menu.clear(); //will clear contents of terminal
menu.main(); //prompt the main menu questions
