import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taskSvc: TaskService
  ) { 
    this.form = this.formBuilder.group({
      id:[""],
      level:["", Validators.required],
      grade:["", Validators.required],
      module:["", Validators.required],
      name:["", [Validators.required]],
      type:[""],
      info:[""],
      date:[new Date().toISOString()]
    });
  }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this.form.controls['id'].setValue(id);
    if(id!="-1")
      this.taskSvc.getTask(id).subscribe(response => {
        console.log(response);
        this.form.controls['level'].setValue(response.level);
        this.form.controls['grade'].setValue(response.grade);
        this.form.controls['module'].setValue(response.module);
        this.form.controls['name'].setValue(response.name);
        this.form.controls['type'].setValue(response.type);
        this.form.controls['info'].setValue(response.info);
        this.form.controls['date'].setValue(response.date);
      });
  }

  onSubmit(){
    var task = this.form.value;
    if(task.id!="-1")
      this.taskSvc.updateTask(task.id, task).subscribe(
        {next:(data)=>{
          this.router.navigate(['tasks']);
        },error:err=>{
          console.log(err);
        }}
      );
    else
      this.taskSvc.createTask(task).subscribe(
        {next:(data)=>{
          this.router.navigate(['tasks']);
        },error:err=>{
          console.log(err);
        }}
      );
  }

}
