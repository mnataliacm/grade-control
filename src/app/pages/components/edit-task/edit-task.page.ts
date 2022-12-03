import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskModel } from 'src/app/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  id: any;
  task: any;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public taskSvc: TaskService
  ) { 
    this.task = new TaskModel();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskSvc.getTask(this.id).subscribe(response => {
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
