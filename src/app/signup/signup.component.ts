import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { TodolistServiceService } from '../service/todolist-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isErrorShow: boolean = false;
  isResponseMessageShow: boolean = false;
  submitted: boolean = false;
  @Output() closepopup = new EventEmitter<string>();
  btnLoad: boolean = false;
  errorMessage = "Password Missmatch!"
  responseMessage = "Already exists!"
  emailValidationMessage = "Email is required!"
  userNameValidationMessage = "User name is required!"
  passwordValidationMessage = "Password is required"
  rePasswordValidationMessage = "RePassword is required"


  constructor(private router: Router, private todoListService: TodolistServiceService) {
  }

  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', [Validators.required])
  })
  signUp() {
    console.log(this.signUpForm.value)
    if (this.signUpForm.value.password == this.signUpForm.value.repassword) {
      const data = {
        "email": this.signUpForm.value.email,
        "userName": this.signUpForm.value.userName,
        "password": this.signUpForm.value.password
      }
      console.log("----------> " + data)
      this.todoListService.signUp(data).subscribe(
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
    else {
      console.log("not ok")
      this.isErrorShow = true;
    }

  }
  ClosePopup() {
    this.closepopup.emit();
  }

  get email() {
    return this.signUpForm.get('email')
  }
  get userName() {
    return this.signUpForm.get('userName')
  }
  get password() {
    return this.signUpForm.get('password')
  }
  get repassword() {
    return this.signUpForm.get('repassword')
  }
}
