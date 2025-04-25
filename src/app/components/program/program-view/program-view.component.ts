import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProgramService } from '../../../services/program.service';
import { Program } from '../../../models/program';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-program-view',
  imports: [NzTableModule, NzButtonModule, DatePipe, NzCheckboxModule ],
  templateUrl: './program-view.component.html',
  styleUrl: './program-view.component.scss',
})
export class ProgramViewComponent implements OnInit {
  programs: Program[] = [];
  isLoading: boolean = false;

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.loadPrograms();
  }

  private loadPrograms(): void {
    this.isLoading = true;
    this.programService.getPrograms().subscribe({
      next: (response) => {
        this.programs = response;
        console.log('Programs:', this.programs);
      },
      error: (error) => {
        console.error('Error fetching programs:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  addProgram(): void {
    alert('To be added!');
    // TODO open modal to add program
  }
}
