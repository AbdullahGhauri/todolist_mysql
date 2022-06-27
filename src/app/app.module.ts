import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePopupComponent } from './update-popup/update-popup.component';
import { ErrormessageComponent } from './shared/errormessage/errormessage.component';
import { HeaderComponent } from './shared/header/header.component';
import { InputfieldvalidationComponent } from './shared/inputfieldvalidation/inputfieldvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TodolistComponent,
    UpdatePopupComponent,
    ErrormessageComponent,
    HeaderComponent,
    InputfieldvalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
