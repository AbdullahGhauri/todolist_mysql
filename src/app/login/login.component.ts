import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodolistServiceService } from '../service/todolist-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private todoListService: TodolistServiceService) { }

  isPopUpShow = false;
  ngOnInit(): void {
  }
  
  responseMessage = "Could not found!"
  isResponseMessageShow: boolean = false;
  loginForm = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });
  
  userNameValidationMessage = "User name is required!"
  passwordValidationMessage = "Password is required"
  loginUser() {

    console.log(this.loginForm.value.UserName)
    const data = {
      "userName": this.loginForm.value.UserName,
      "password": this.loginForm.value.Password
    } 
    console.log("----------> " + data)
    this.todoListService.signIn(data).subscribe(
      (response) => {                           //Next callback
        console.log('response received' + response)

        sessionStorage.setItem("jwt",response)
       this.router.navigate(['/todolist']);
      },
      (error) => {                       //Next callback
        console.log('response error  ' + error)
        this.isResponseMessageShow = true;

        //throw error;   //You can also throw the error to a global error handler
      }
    )



  }
  signup() {
    this.isPopUpShow = true
  }
  closepopup() {
    this.isPopUpShow = false;
  }

  get username() {
    return this.loginForm.get('UserName');
  }
  get Password() {
    return this.loginForm.get('Password');
  }

}
