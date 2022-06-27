import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodolistServiceService {
  url = "http://23.23.145.233:8080/";
  constructor(private http: HttpClient) { }

  getAllTodoListItem() {
    return this.http.get(this.url + "getAllTodoListItem");
  }

  addItemTodot(data: any) {
    return this.http.post(this.url + "insertTodoListItem", data);
  }

  updateItemTodo(data: any, id: any) {
    return this.http.put(this.url + "updateTodoListItem/" + id, data);
  }
  deleteItemTodo(id: any) {
    return this.http.delete(this.url + "deleteTodoListItemById/" + id);
  }
  signUp(data: any) {
    return this.http.post(this.url + "signUpUser", data, { responseType: 'text' });
  }
  signIn(data: any) {
    return this.http.post(this.url + "loginUser", data, { responseType: 'text' });
  }
}
