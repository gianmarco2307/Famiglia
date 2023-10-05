import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PADREComponent {
  numeriDispari: string[] = ["I","III","V","VII","IX"];

  @Output() output = new EventEmitter<string[]>();

  clickAndSend(){
    this.output.emit(this.numeriDispari);
  }
}
