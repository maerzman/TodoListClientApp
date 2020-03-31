import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { TodoItem } from "models/TodoItem";
import { TodoService } from "services/TodoService";

@inject(TodoService, Router)
export class New {
    public todo:TodoItem = null;
    constructor(private todoService: TodoService, private router: Router) {}

    activate(){
        this.todo = new TodoItem();
    }

    async createTodo(){
        await this.todoService.createTodo(this.todo);
        this.router.navigateToRoute("index");
    }
}