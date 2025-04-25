import { Component } from '@angular/core';
import { ProgramViewComponent } from "../program/program-view/program-view.component";

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [ProgramViewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
