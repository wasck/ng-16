import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter-roadmap/counter/counter.component';
import { ScamCounterComponent } from './counter-roadmap/scam-counter/scam-counter.component';
import { ScamCounterModule } from './counter-roadmap/scam-counter/scam-counter.module';
import { StandaloneCounterComponent } from './counter-roadmap/standalone-counter/standalone-counter.component';
import { InputOutputComponent } from './signals-roadmap/00_input-output/input-output.component';
import { BehaviorSubjectComponent } from './signals-roadmap/01_behavior-subject/behavior-subject.component';
import { SignalComponent } from './signals-roadmap/02_signal/signal.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterComponent,
    ScamCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    ScamCounterModule,
    StandaloneCounterComponent,
    InputOutputComponent,
    BehaviorSubjectComponent,
    SignalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
