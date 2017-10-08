import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flyIn', [
      state('in', style({transform: 'translateX(0%)'})),
      transition('void => *', [
        style({transform: 'translateX(120%)'}),
        animate('450ms 0ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  quote = 'some gift are big others are small, but the ones that come from the heart, are the best gifts of all';
}
