import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss'
})
export class CounterDisplayComponent {
  counterDisplay:number=0;
  constructor(private store:Store<{counter:{counter:number}}>){
    this.store.select('counter').subscribe(res=>{
      this.counterDisplay=res.counter;
    })
   }
}
