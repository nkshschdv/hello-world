import { Component } from '@angular/core';

@Component( {
  selector: 'app-warning-alert',
  template: `
  <div>
    Warning : You need to use Webstorm Js
  </div>
  `,
  styles: [`
  div{
    color: darkred;
    background-color: yellow;
  }
  `]
})

export class WarningAlertComponent {
}
