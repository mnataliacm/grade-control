import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, retry, throwError } from 'rxjs';
import { GradeModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  base_path = 'http://localhost:3000/gradesData';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


  createGrade(grade: any): Observable<GradeModel> {
    return this.http
      .post<GradeModel>(this.base_path + '/', JSON.stringify(grade), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getGrade(id: string): Observable<GradeModel> {
    return this.http
      .get<GradeModel>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListGrades(): Observable<GradeModel> {
    return this.http
      .get<GradeModel>(this.base_path + '/')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateGrade(id: string, grade: undefined): Observable<GradeModel> {
    return this.http
      .put<GradeModel>(this.base_path + '/' + id, JSON.stringify(grade), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteGrade(id: string) {
    return this.http
      .delete<GradeModel>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
