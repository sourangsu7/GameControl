import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit,OnChanges {
@Input() evenValues:number;

ngOnInit(): void {
  
}
ngOnChanges(changes: SimpleChanges): void {

}

}
