import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, catchError } from 'rxjs';
import { Program } from '../models/program';
import { ennvironment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  createProgram(program: Program): void {
    // return this.http.get<Program[]>(`${ennvironment.apiUrl}/Program`)
    // .pipe(
    //   take(1)
    // );


      //   (response) => {
      //   console.log('Program created:', response);
      // });
  }

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(`${ennvironment.apiUrl}/Program`)
      .pipe(
        take(1)
      );
  }

}
