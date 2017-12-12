import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.styles.scss' ],
  template: `
    <header>
    </header>

    <main class="page__content">
      <router-outlet></router-outlet>
    </main>

    <footer>
    </footer>
  `
})
export class AppComponent implements OnInit {
  public showDevModule: boolean = environment.showDevModule;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
