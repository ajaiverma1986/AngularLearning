import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildCompComponent } from "../child-comp/child-comp.component";

@Component({
  selector: 'app-parentcomp',
  standalone: true,
  imports: [RouterOutlet, ChildCompComponent],
  templateUrl: './parentcomp.component.html',
  styleUrl: './parentcomp.component.css'
})
export class ParentcompComponent {

  msgdata!:string 
  handelChildvalue(data:any)
  {
    this.msgdata=data;
  }
}
