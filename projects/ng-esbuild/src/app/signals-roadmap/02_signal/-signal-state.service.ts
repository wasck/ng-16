import { Injectable, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalStateService {
  private readonly _counter = new BehaviorSubject<number>(0);

  public readonly counter = toSignal(this._counter);

  public constructor() {
    this.initEffect();
  }


  private initEffect() {
    effect(() => console.log(`Counter changed: ${this.counter()}`));
  }

  public increment(): void {
    this._counter.next(this._counter.value + 1);
  }
  
  public decrement(): void {
    this._counter.next(this._counter.value - 1);
  }
}
