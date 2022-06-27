import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errormessage',
  templateUrl: './errormessage.component.html',
  styleUrls: ['./errormessage.component.css']
})
export class ErrormessageComponent implements OnInit {

  constructor() { }
  @Input() data = '';
  ngOnInit(): void {
  }

}
