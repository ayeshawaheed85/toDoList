import inquirer from 'inquirer';
import { Todo } from './todo.js';

const todo = new Todo();

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: [
            'Add Task',
            'List Tasks',
            'Mark Task as Done',
            'Delete Task',
            'Exit'
        ]
    }).then((answer: { action: string }) => {
        switch (answer.action) {
            case 'Add Task':
                addTask();
                break;
            case 'List Tasks':
                listTasks();
                break;
            case 'Mark Task as Done':
                markTaskAsDone();
                break;
            case 'Delete Task':
                deleteTask();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit();
        }
    });
}

function addTask() {
    inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter the task:'
    }).then((answer: { task: string }) => {
        todo.addTask(answer.task);
        console.log('Task added successfully!');
        mainMenu();
    });
}

function listTasks() {
    const tasks = todo.listTasks();
    console.log('Tasks:');
    tasks.forEach((task: string) => console.log(`- ${task}`));
    mainMenu();
}

function markTaskAsDone() {
    inquirer.prompt({
        type: 'checkbox',
        name: 'tasks',
        message: 'Select tasks to mark as done:',
        choices: todo.listTasks()
    }).then((answer: { tasks: string[] }) => {
        answer.tasks.forEach((task: string) => todo.markTaskAsDone(task));
        console.log('Tasks marked as done successfully!');
        mainMenu();
    });
}

function deleteTask() {
    inquirer.prompt({
        type: 'checkbox',
        name: 'tasks',
        message: 'Select tasks to delete:',
        choices: todo.listTasks()
    }).then((answer: { tasks: string[] }) => {
        answer.tasks.forEach((task: string) => todo.deleteTask(task));
        console.log('Tasks deleted successfully!');
        mainMenu();
    });
}

console.log('Welcome to the Todo App!');
mainMenu();
