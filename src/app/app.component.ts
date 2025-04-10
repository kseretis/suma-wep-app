import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavigatorComponent } from "./components/navigator/navigator.component";
import { MenuItem } from './models/menu-item';
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NzButtonModule, NavigatorComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'suma-wep-app';
  menu: MenuItem[] = [
    { title: 'Home', icon: 'home' },
    { title: 'Profile', icon: 'home' },
    { title: 'About', icon: 'home' },
  ];

  ngOnInit(): void {
    console.log('Launcing suma-wep-app...');
  }

}
