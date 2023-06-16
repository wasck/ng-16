import { Component } from '@angular/core';

@Component({
  selector: 'app-scam-counter',
  templateUrl: './scam-counter.component.html',
  styleUrls: ['./scam-counter.component.scss']
})
export class ScamCounterComponent {
  public counter: number = 0;

  public increment(): void {
    this.counter++;
  }
  
  public decrement(): void {
    this.counter--;
  }
}
