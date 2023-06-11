import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-standalone-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="flex flex-row gap-5">
      <button mat-raised-button 
      (click)="decrement()"
      class="uppercase">
        decrement
      </button>
      
      {{ counter }}
      
      <button mat-raised-button 
        (click)="increment()"
        color="primary"
        class="uppercase">
        increment
      </button>
    </div>
  `,
  styles: [''],
})
export class StandaloneCounterComponent {

  public counter: number = 0;

  public increment(): void {
    this.counter++;
  }
  
  public decrement(): void {
    this.counter--;
  }
  
}
