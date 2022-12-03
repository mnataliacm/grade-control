import { Component } from '@angular/core';
import { StudentService } from '../../services';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  
})
export class StudentComponent  {

  // student: any;
  // page: string;

  // constructor(
  //   private studentSvc: StudentService,
  //   ) {
  //     this.student = [];
  //     this.page = "student";
  // }
 
  // ionViewWillEnter() {
  //   this.getAllStudent();
  // }

  // getAllStudent() {
  //   this.studentSvc.getListStudent().subscribe(response => {
  //     console.log(response);
  //     this.student = response;
  //   })
  // }

  // delete(item: { id: string; }) {
  //   this.studentSvc.deleteStudent(item.id).subscribe(Response => {
  //     this.getAllStudent();
  //   });
  // }

}
