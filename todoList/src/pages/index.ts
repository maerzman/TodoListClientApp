import {TodoItem} from "models/TodoItem";
import{inject} from "aurelia-framework";
import {TodoService} from "services/TodoService";
import { Router } from 'aurelia-router';

@inject(TodoService, Router)
export class Index{
    public todos:TodoItem[] = null; 
    constructor(private todoSvc:TodoService, private router: Router){}

    public colorclass(isDone:boolean, due:string): string { 
        if (isDone)
          return "bg-success";
    
        else if(new Date(due).getTime() < new Date().getTime())
            return "bg-danger";
        else 
            return "";
    }

    public async removeTodo(Id:number){
        if(confirm("Do you really want to delete this todo item"))
           await this.todoSvc.removeTodo(Id);    
        this.todos = await this.todoSvc.getTodos();
    }

    public async addTodo(){
        this.router.navigateToRoute("newTodo");
    }

    public editTodo(Id:number){
        console.log(Id);
        this.router.navigateToRoute("editTodo", { Id:Id } );
    }

    async activate(){
        this.todos = await this.todoSvc.getTodos();
    }
}