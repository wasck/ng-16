import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="flex flex-row gap-5">
      <button mat-raised-button 
      (click)="decrement()"
      class="uppercase">
        decrement
      </button>
      
      {{ innerCounter }}
      
      <button mat-raised-button 
        (click)="increment()"
        color="primary"
        class="uppercase">
        increment
      </button>
    </div>
  `,
  styles: []
})
export class InputOutputComponent {
  public innerCounter: number = 0;

  @Output() counter = new EventEmitter<number>();

  public increment(): void {
    this.innerCounter++;
    this.emitCounter();
  }
  
  public decrement(): void {
    this.innerCounter--;
    this.emitCounter();
  }

  private emitCounter(): void {
    this.counter.emit(this.innerCounter);
  }
}
