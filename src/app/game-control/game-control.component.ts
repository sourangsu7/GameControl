import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() onPlay = new EventEmitter<number>();
id:any;
  counter: number = 1;
  numberDrop() {
    this.id =
    setInterval(() => {
      this.onPlay.emit(this.counter++);
    }, 1000);
  }


gameOver(){
if(this.id){
  clearInterval(this.id);
}
}
  
}
