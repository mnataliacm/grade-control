import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentModel, StudentService } from 'src/app/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage {

  _students: any;

  constructor(
    private studentSvc: StudentService,
    private router: Router,
  ) {
    this._students = new StudentModel();
  }

  submitFormStudent() {
    this.studentSvc.createStudent(this._students).subscribe((response) => {
      this.router.navigate(['students']);
    });
  }

}
