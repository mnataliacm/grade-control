import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from 'src/app/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage {

  _tasks: any;

  constructor(
    private taskSvc: TaskService,
    private router: Router,
  ) {
    this._tasks = new TaskModel();
  }

    submitFormTask() {
      this.taskSvc.createTask(this._tasks).subscribe((response) => {
        this.router.navigate(['tasks']);
      });
  }

  onTaskDateTime(event:any, task:TaskModel){
    task.date = event;
    this.taskSvc.updateTask(task.id, task);
    console.log(event);
  }

}
