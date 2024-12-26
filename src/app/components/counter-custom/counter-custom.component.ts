import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../store/counter.action';
import { counterModel } from '../../store/counter.state';


@Component({
  selector: 'app-counter-custom',
  templateUrl: './counter-custom.component.html',
  styleUrl: './counter-custom.component.scss'
})
export class CounterCustomComponent {
  inputValue: string='';
  constructor(private store:Store<{counter:counterModel}>){

  }


  handleButtonClick(): void {
    console.log('Input Value:', this.inputValue);
    // You can further process the inputValue here
     this.store.dispatch(customIncrement({value: parseFloat(this.inputValue)}))
  }
}
