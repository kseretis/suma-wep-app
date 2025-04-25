import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProgramService } from '../../../services/program.service';
import { Program } from '../../../models/program';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-program-view',
  imports: [
    NzTableModule,
    NzButtonModule,
    DatePipe,
    NzCheckboxModule,
    NzModalModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzCardModule,
    NzInputModule,
  ],
  templateUrl: './program-view.component.html',
  styleUrl: './program-view.component.scss',
})
export class ProgramViewComponent implements OnInit {
  programs: Program[] = [];
  isLoading: boolean = false;
  isAddProgramModalVisible: boolean = false;

  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    isActive: this.fb.control(true, [Validators.required]),
  });

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    this.loadPrograms();
  }

  private loadPrograms(): void {
    this.isLoading = true;
    this.programService.getPrograms().subscribe({
      next: (response) => {
        this.programs = response.data as Program[];
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

  createProgram(): void {
    if (this.validateForm.invalid) {
      return;
    }

    this.programService
      .createProgram({
        name: this.validateForm.value.name,
        isActive: this.validateForm.value.isActive,
      })
      .subscribe({
        next: (response) => {
          console.log('return: ', response.message);
        },
        error: (error) => {
          console.error('Error creating program:', error);
        },
        complete: () => {
          this.loadPrograms();
        },
      });
  }
}
