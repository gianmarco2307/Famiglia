import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FIGLIOComponent {
  @Input() arrayEreditato!: string[];
  ricevutoDaChild: boolean = false;

  riceviDaChild(event: any){
    this.arrayEreditato = event;
    this.ricevutoDaChild = true;
  }
}
