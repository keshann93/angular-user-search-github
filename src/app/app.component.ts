import { Component } from '@angular/core';
import {GithubService} from './services/github.services';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-default" >
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Github User Search</a>
        </div>
        </div>
    </nav>
  <div class = "container">
  <router-outlet></router-outlet>

  </div>`
  ,
  providers : [GithubService]
})
export class AppComponent  { }
