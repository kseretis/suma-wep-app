import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, catchError, map } from 'rxjs';
import { Program } from '../models/program';
import { ennvironment } from '../../environment';
import { Response } from '../models/response';

const PROGRAM_ENDPOINT = '/Program';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor(private http: HttpClient) {}

  createProgram(program: Program): Observable<Response> {
    return this.http
      .post<Response>(`${ennvironment.apiUrl}${PROGRAM_ENDPOINT}`, program)
      .pipe(
        take(1)
      );
  }

  getPrograms(): Observable<Response> {
    return this.http
      .get<Response>(`${ennvironment.apiUrl}${PROGRAM_ENDPOINT}`)
      .pipe(
        take(1)
      );
  }
}
