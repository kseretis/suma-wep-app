import { Component } from "@angular/core";


@Component({
  standalone: true,
  selector: 'app-add-program',
  imports: [

  ],
  templateUrl: './add-program.component.html',
  styleUrl: './add-program.component.scss',
})
export class AddProgramComponent  {
  title: string = 'Create a new program';
  name!: string;
  isActive: boolean = true;
  isLoading: boolean = false;

  constructor() {}


}
