import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>

  <br>

  <router-outlet>
  </router-outlet>

`,

})
export class EventsAppComponent {

}
