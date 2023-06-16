import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SignalStateService } from './-signal-state.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="flex flex-row gap-5">
      <button mat-raised-button 
      (click)="decrement()"
      class="uppercase">
        decrement
      </button>
      
       <span class="text-lime-600">{{ counter() }}</span> 
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
export class SignalComponent {
  public readonly counter: Signal<number | undefined> = this.state.counter;

  public constructor(private readonly state: SignalStateService){}

  public increment(): void {
    this.state.increment();
  }

  public decrement(): void {
    this.state.decrement();
  }
}
