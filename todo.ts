export class Todo {
    private tasks: string[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: string) {
        this.tasks.push(task);
    }

    listTasks(): string[] {
        return [...this.tasks];
    }

    markTaskAsDone(task: string) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks[index] = `[DONE] ${task}`;
        }
    }

    deleteTask(task: string) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}
