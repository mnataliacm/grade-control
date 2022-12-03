import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { TaskModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  base_path = 'http://localhost:3000/tasksData'

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

  createTask(task: any): Observable<TaskModel> {
    return this.http
      .post<TaskModel>(this.base_path, JSON.stringify(task), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getTask(id: string): Observable<TaskModel> {
    return this.http
      .get<TaskModel>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListTask(): Observable<TaskModel> {
    return this.http
      .get<TaskModel>(this.base_path + '/')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateTask(id: string, task: any): Observable<TaskModel> {
    return this.http
      .put<TaskModel>(this.base_path + '/' + id, JSON.stringify(task), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteTask(id: string) {
    return this.http
      .delete<TaskModel>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // private _tasks: Task[] = [];
  // private _tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject(this._tasks);
  // public _tasks$ = this._tasksSubject.asObservable();

  // id: number = this._tasks.length+1;

  // getTasks(): Task[] {
  //   return this._tasks;
  // }

  // getTaskById(id:number){
  //   return this._tasks.find(p=>p.id==id);
  // }

  // deleteTaskById(id:number){
  //   this._tasks = this._tasks.filter(p=>p.id != id); 
  //   this._tasksSubject.next(this._tasks);
  // }

  // addTask(task:Task){
  //   task.id = this.id++;
  //   this._tasks.push(task);
  //   this._tasksSubject.next(this._tasks)
  // }

  // updateTask(task:Task){
  //   var _tasks = this._tasks.find(p=>p.id==task.id);
  //   if(_tasks){
  //     _tasks.name = task.name;
  //     _tasks.time = task.time;
  //     _tasks.picture = task.picture;
  //   }   
  //   this._tasksSubject.next(this._tasks);
  // }
}