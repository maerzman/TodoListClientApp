import { inject, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { TodoItem } from "models/TodoItem";
import { TodoService } from "services/TodoService";

@inject(TodoService, Router)
export class Edit{
    @bindable public todo:TodoItem = null;
    constructor(private todoService: TodoService, private router: Router) {}
    async activate(params) {
        this.todo = await this.todoService.getTodo(params.Id);
        console.log(this.todo);
    }

    async editTodo(){
        await this.todoService.updateTodo(this.todo);
        this.router.navigateToRoute("index");
    }
}