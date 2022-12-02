import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel, StudentService } from 'src/app/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  id: any;
  student: any;
  //task: Task;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public studentsSvc: StudentService,
    //public tasksSvc: TasksService
  ) { 
    this.student = new StudentModel();
    //this.task = new Task();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //get item details using id
    this.studentsSvc.getStudent(this.id).subscribe(response => {
      console.log(response);
      this.student = response;
    })
    // this.tasksService.getTask(this.id).subscribe(response => {
    //   console.log(response);
    //   this.task = response;
    // })
  }

  updateStudent() {
    this.studentsSvc.updateStudent(this.id, this.student).subscribe(response => {
      this.router.navigate(['students']);
    })
  }

  // updateTask() {
  //   this.tasksService.updateTask(this.id, this.task).subscribe(response => {
  //     this.router.navigate(['tasks']);
  //   })
  // }

}
