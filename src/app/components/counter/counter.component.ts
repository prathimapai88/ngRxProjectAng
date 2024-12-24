import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  constructor(private store:Store<{counter:{counter:number}}>){

  }

  increment(): void {
    this.store.dispatch(increment())
  }

  decrement(): void {
    this.store.dispatch(decrement())
  }

  reset(): void {
    this.store.dispatch(reset())
  }

}
