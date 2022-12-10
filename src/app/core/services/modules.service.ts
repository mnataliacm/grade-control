import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ModuleModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  base_path = 'http://localhost:3000/gradeModules'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  createModule(task: any): Observable<ModuleModel> {
    return this.http
      .post<ModuleModel>(this.base_path, JSON.stringify(task), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getModule(id: string): Observable<ModuleModel> {
    return this.http
      .get<ModuleModel>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListModule(): Observable<ModuleModel> {
    return this.http
      .get<ModuleModel>(this.base_path + '/')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateModule(id: string|undefined, task: ModuleModel): Observable<ModuleModel> {
    return this.http
      .put<ModuleModel>(this.base_path + '/' + id, JSON.stringify(task), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteModule(id: string) {
    return this.http
      .delete<ModuleModel>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // getTaskId(id: string) {
  //   return this.http
  //     .get<ModuleModel>(this.base_path + '/' + id, this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

}
