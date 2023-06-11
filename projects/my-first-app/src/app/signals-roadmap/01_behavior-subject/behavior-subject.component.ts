import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { StateService } from './-state.service';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
    <div class="flex flex-row gap-5">
      <button mat-raised-button 
      (click)="decrement()"
      class="uppercase">
        decrement
      </button>
      
       <span class="text-lime-600">{{ counter$ | async }}</span> 
       |
       <span class="text-red-300">{{ counter }}</span>
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
export class BehaviorSubjectComponent implements OnDestroy {
  private readonly destroyed$ = new Subject<void>();

  public counter = 0;
  public readonly counter$ = this.state.counter$;

  public constructor(private readonly state: StateService){
    this.state.counter$
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
      next: (value: number) => this.counter = value
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public increment(): void {
    this.state.increment();
  }
  
  public decrement(): void {
    this.state.decrement();
  }
}
