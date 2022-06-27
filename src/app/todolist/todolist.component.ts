import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodolistServiceService } from '../service/todolist-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todoItems: any = [];
  constructor(private router: Router, private todoListService: TodolistServiceService) {
    this.getTodoListItem();
  }
  isPopupShow = false;
  currentDate = new Date();
  todoListItem = null
  ngOnInit(): void {
  }
  todoListItemValidationMeassage = "TodoItem is required!"
  todoList = new FormGroup({
    workName: new FormControl('', [Validators.required])
  })

  getTodoListItem() {
    this.todoListService.getAllTodoListItem().subscribe((data) => {
      console.log("------------  ", data)
      this.todoItems = data
    })
  }

  addWork(item: any) {

    this.currentDate = new Date();
    const temp = {
      "todoListItem": item,
      "todoListItemDate": this.currentDate
    };
    console.log(item + "    " + this.currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }))
    this.todoListService.addItemTodot(temp).subscribe((result: any) => {
      console.log(result)

    })
    this.getTodoListItem();
  }

  updateTodo(item: any) {
    console.log(item)
    this.todoListItem = item
    this.isPopupShow = true
  }
  deleteTodo(id: any) {
    console.log("id " + id)
    this.todoListService.deleteItemTodo(id).subscribe((result: any) => {
      console.log(result)

    })

    this.getTodoListItem();

  }
  closepopup() {
    this.isPopupShow = false;
  }

  get workName() {
    return this.todoList.get('workName');
  }
}
