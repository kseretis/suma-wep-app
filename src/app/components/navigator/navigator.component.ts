import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})
export class NavigatorComponent implements OnInit {

  @Input({required: true})
  menu: MenuItem[] = [];

  ngOnInit(): void {
    console.log("...");
  }

}
