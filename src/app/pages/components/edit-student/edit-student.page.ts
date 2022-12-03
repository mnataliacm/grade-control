import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel, StudentService } from 'src/app/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {

  id: any;
  student: any;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public studentsSvc: StudentService,
  ) { 
    this.student = new StudentModel();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.studentsSvc.getStudent(this.id).subscribe(response => {
      console.log(response);
      this.student = response;
    })
  }

  updateStudent() {
    this.studentsSvc.updateStudent(this.id, this.student).subscribe(response => {
      this.router.navigate(['students']);
    })
  }

}
