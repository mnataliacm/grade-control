import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/core';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {

  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentsSvc: StudentService,
  ) { 
    this.form = this.formBuilder.group({
      id:[""],
      name:["", Validators.required],
      surname:["", Validators.required],
      email:["", [Validators.required, Validators.email]],
      picture:[""],
      grade:["", Validators.required],
      level:["", Validators.required],
    });
  }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    this.form.controls['id'].setValue(id);
    if(id!="-1")
      this.studentsSvc.getStudent(id).subscribe(response => {
        console.log(response);
        this.form.controls['name'].setValue(response.name);
        this.form.controls['surname'].setValue(response.surname);
        this.form.controls['email'].setValue(response.email);
        this.form.controls['picture'].setValue(response.picture);
        this.form.controls['grade'].setValue(response.grade);
        this.form.controls['level'].setValue(response.level);
      });
  }

  onSubmit(){
    var student = this.form.value;
    if(student.id!="-1")
      this.studentsSvc.updateStudent(student.id, student).subscribe(
        {next:(data)=>{
          this.router.navigate(['students']);
        },error:err=>{
          console.log(err);
        }}
      );
    else
      this.studentsSvc.createStudent(student).subscribe(
        {next:(data)=>{
          this.router.navigate(['students']);
        },error:err=>{
          console.log(err);
        }}
      );
  }

}
