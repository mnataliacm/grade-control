import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel, StudentService } from 'src/app/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
[x: string]: any;

  student: StudentModel;
  //task: Task;
  page: string | undefined;

  constructor(
    public studentSvc: StudentService,
    //public tasksService: TasksService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.student = new StudentModel();
    //this.task = new Task();
  }

  // thisPageIs():boolean {
  //   if (StudentModel) {
  //     return true;
  //   }
  // }

  submitFormStudent() {
    this.studentSvc.createStudent(this.student).subscribe((response) => {
      this.router.navigate(['students']);
    });
  }
  //   submitFormTask() {
  //     this.tasksService.createTask(this.task).subscribe((response) => {
  //       this.router.navigate(['tasks']);
  //     });
  // }

}
