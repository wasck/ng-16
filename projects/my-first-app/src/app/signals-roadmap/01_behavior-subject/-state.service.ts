import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly _counter = new BehaviorSubject<number>(0);

  public readonly counter$ = this._counter.asObservable();


  public increment(): void {
    this._counter.next(this._counter.value + 1);
  }
  
  public decrement(): void {
    this._counter.next(this._counter.value - 1);
  }
}
