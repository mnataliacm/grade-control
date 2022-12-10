import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeModel, GradeService, TaskModel } from 'src/app/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  id: any;
  task: any;
  grades: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskSvc: TaskService,
    private gradeSvc: GradeService
  ) { 
    this.task = new TaskModel();
    this.grades = new GradeModel();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskSvc.getTask(this.id).subscribe(response => {
      console.log(response);
      this.task = response;
    })
    this.gradeSvc.getGrade(this.id).subscribe(response => {
      console.log(response);
      this.task = response;
    })
  }

  updateTask() {
    this.taskSvc.updateTask(this.id, this.task).subscribe(response => {
      this.router.navigate(['tasks']);
    })
  }

}
