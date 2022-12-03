import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { StudentModel, StudentService, TaskModel } from 'src/app/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {

  _students: any;
  _tasks: any;
  value: string | undefined;

  @Input() _task: any;
  @Input() _student: any;

  constructor(
    private studentSvc: StudentService,
    public taskSvc: TaskService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this._students = new StudentModel();
    this._tasks = new TaskModel();
  }

  submitFormStudent() {
    this.studentSvc.createStudent(this._students).subscribe((response) => {
      this.router.navigate(['people']);
    });
  }
    submitFormTask() {
      this.taskSvc.createTask(this._tasks).subscribe((response) => {
        this.router.navigate(['tasks']);
      });
  }

}
