import {TodoItem} from "models/TodoItem";
import { HttpClient, json } from "aurelia-fetch-client"
import { inject } from 'aurelia-framework';

export class TodoService{
   
    private httpClient:HttpClient;
    private baseUrl:string = "https://localhost:44312/api/todo";
    constructor(){
        this.httpClient = new HttpClient();
    }

    public async getTodos():Promise<TodoItem[]>{
        let result = await this.httpClient.fetch(this.baseUrl, {method: 'get'});
        return result.json();
    }

    public async removeTodo(Id:number):Promise<boolean>{  
        let result = await this.httpClient.fetch(this.baseUrl + "/" + Id, {method: 'delete'})
        return result.ok;
    }

    public async createTodo(todo:TodoItem):Promise<any>{
        let result = await this.httpClient.fetch(this.baseUrl, {method: 'post', body: json(todo)});
        return result.json();
    }

    public async getTodo(Id:number):Promise<TodoItem>{
        let result = await this.httpClient.fetch(this.baseUrl + "/" +  Id, {method: 'get'})
        return result.json();
    }

    public async updateTodo(todo:TodoItem){
        let result = await this.httpClient.fetch(this.baseUrl + "/" + todo.Id, {method: 'put', body: json(todo)})
        return result.json();
    }
}