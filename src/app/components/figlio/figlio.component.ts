import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FIGLIOComponent {
  @Input() arrayEreditato!: string[];
  ricevutoDaChild!: string[];
  ricevuto: boolean = false;

  riceviDaChild(event: any){
    this.ricevutoDaChild = event;
    this.ricevuto = true;
  }
}
