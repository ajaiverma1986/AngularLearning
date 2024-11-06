import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css',
  inputs: ['pdata']

})
export class ChildCompComponent implements OnInit {
  @Output() sendDataToParent = new EventEmitter<any>();
  pdata: any;

  mydata!: string

  ngOnInit(): void {

  }
  sendData(){
    this.sendDataToParent.emit(this.mydata)
  }

}
