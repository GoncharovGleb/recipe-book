import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isResipesPage: boolean = false;

  onAncorClick() {
    this.isResipesPage = !this.isResipesPage;
  }
}
