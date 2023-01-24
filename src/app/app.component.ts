import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book rating';
  now = Date.now();
  timer = setInterval(() => this.now = Date.now(), 1000);
}
