import { Component, Signal } from '@angular/core';

import { StateService } from './signals-roadmap/01_behavior-subject/-state.service';
import { SignalStateService } from './signals-roadmap/02_signal/-signal-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'my-first-app';

  public inputOutputCounter = 0;
  public readonly behaviorSubjectCounter$ = this.bsState.counter$;
  public readonly signalCounter: Signal<number | undefined> = this.signalState.counter;

  public constructor(
    private readonly bsState: StateService,
    private readonly signalState: SignalStateService
  ){}


  public setInputOutputCounter(counter: number): void {
    this.inputOutputCounter = counter;
  }
}
