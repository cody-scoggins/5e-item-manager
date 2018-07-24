import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent implements OnInit {

  @ViewChild(HomeComponent)
  private apphome: HomeComponent;

  constructor() { }

  ngOnInit() {

  }

  showSidebar() {
    this.apphome.showSidebar();
  }

}
