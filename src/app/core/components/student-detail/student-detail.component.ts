import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { StudentModel } from '../../models';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent {

  form:FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('student') set student(student:StudentModel){
    // if(student){
    //   this.form.controls.id.setValue(student.id);
    //   this.form.controls.name.setValue(student.name);
    //   this.form.controls.surname.setValue(student.surname);
    //   this.form.controls.email.setValue(student.email);
    //   this.form.controls.picture.setValue(student.picture);
    //   this.form.controls.grade.setValue(student.grade);
    //   this.mode = "Edit";
    // }
  }
  
  constructor(
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      name:[''],
      surname:[''],
      email:[''],
      picture:[''],
      grade:['']
    });
  }

  onSubmit(){   
    this.modal.dismiss({student: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result: any){
    this.modal.dismiss(null, 'cancel');
  }

}
