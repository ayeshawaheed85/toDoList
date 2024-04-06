export class Todo {
    tasks;
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    listTasks() {
        return [...this.tasks];
    }
    markTaskAsDone(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks[index] = `[DONE] ${task}`;
        }
    }
    deleteTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}
