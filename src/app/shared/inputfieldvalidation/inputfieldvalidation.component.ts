import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputfieldvalidation',
  templateUrl: './inputfieldvalidation.component.html',
  styleUrls: ['./inputfieldvalidation.component.css']
})
export class InputfieldvalidationComponent implements OnInit {

  constructor() { }
  @Input() data = '';

  ngOnInit(): void {
  }

}
