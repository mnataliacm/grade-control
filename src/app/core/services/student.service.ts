import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { StudentModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  base_path = 'http://localhost:3000/studentsData';
  addStudent = true;

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

  // Create a new item
  createStudent(student: StudentModel): Observable<StudentModel> {
    var newStudent = {
      id: "",
      name: student.name,
      surname: student.surname,
      email: student.email,
      grade: student.grade,
      level: student.level
    }
    return this.http
      .post<StudentModel>(this.base_path + '/', JSON.stringify(newStudent), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get single People data by ID
  getStudent(id: string): Observable<StudentModel> {
    return this.http
      .get<StudentModel>(this.base_path + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get Peoples data
  getListStudent(grade: string | null = null): Observable<StudentModel[]> {
    var params = {};
    if (grade != null)
      params = { params: { grade: grade } };
    return this.http
      .get<StudentModel[]>(this.base_path + '/', params)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Update item by id
  updateStudent(id: string, student: StudentModel): Observable<StudentModel> {
    return this.http
      .put<StudentModel>(this.base_path + '/' + id, JSON.stringify(student), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete item by id
  deleteStudent(id: string | undefined) {
    if (!id)
      return of({});
    return this.http
      .delete<StudentModel>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }


  // getStudents(): StudentModel[] {
  //   return this._student;
  // }

  // getStudentById(id: number) {
  //   return this._student.find(p => p.studentId == id);
  // }

  // deleteStudentById(id: number) {
  //   this._student = this._student.filter(p => p.studentId != id);
  //   this._studentSubject.next(this._student)
  // }

  // addStudent(student: StudentModel) {
  //   student.studentId = this.id++;
  //   this._student.push(student);
  //   this._studentSubject.next(this._student);
  // }

  // updateStudent(student: StudentModel) {
  //   var _student = this._student.find(p => p.studentId == student.studentId);
  //   if (_student) {
  //     _student.name = _student.name;
  //     _student.surname = _student.surname;
  //     _student.email = _student.email;
  //     _student.picture = _student.picture;
  //     _student.module = _student.module;
  //   }
  //   this._studentSubject.next(this._student);
  // }
}
