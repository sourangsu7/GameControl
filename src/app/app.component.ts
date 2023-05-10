import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberCollection=[];
  title = 'GameControl';
  // @Input() acceptProjectedNumber:number;

  projectNumbers(acceptProjectedNumber:number){
this.numberCollection.push(acceptProjectedNumber);
  }
}
