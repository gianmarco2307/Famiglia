import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Famiglia';

  numeri: string[] = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
}
