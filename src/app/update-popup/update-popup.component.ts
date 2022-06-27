import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodolistServiceService } from '../service/todolist-service.service';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrls: ['./update-popup.component.css']
})
export class UpdatePopupComponent implements OnInit {

  submitted: boolean = false;
  @Output() closepopup = new EventEmitter<string>();
  btnLoad: boolean = false;


  @Input() item: any = {}
  currentDate: Date | undefined;
  constructor(private router: Router, private todoListService: TodolistServiceService) {
  }
  todoListItem: any = this.item
  ngOnInit(): void {
  }
  todoListItemValidationMeassage = "TodoItem is required!"
  updateForm = new FormGroup({
    todoItem: new FormControl('', [Validators.required])
  })
  update(item: any, id: any) {
    console.log(this.updateForm.value)
    this.currentDate = new Date();
    const temp = {
      "todoListItem": item,
      "todoListItemDate": this.currentDate
    };
    console.log(item + "    " + this.currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }))
    this.todoListService.updateItemTodo(temp, id).subscribe((result: any) => {
      console.log(result)

    })
    this.closepopup.emit();
  }
  ClosePopup() {
    this.closepopup.emit();
  }

  get todoItem() {
    return this.updateForm.get('todoItem')
  }

}
