import {Component} from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'backstage-angular';
  apiEndPoint: string;
  profile: string;

  constructor() {
    this.apiEndPoint = environment.API;
    this.profile = environment.production ? 'Prod' : 'Dev';
  }
}
