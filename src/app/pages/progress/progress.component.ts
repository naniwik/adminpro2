import { Component } from '@angular/core';
import { IncrementadorComponent } from 'src/app/components/incrementador/incrementador.component';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {

  prog1 = 15;
  prog2 = 75;

  constructor() {}

  getProgreso1(): string {
    return `${this.prog1}%`;
  }

  getProgreso2(): string {
    return `${this.prog2}%`;
  }

}
