import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { GradeModel } from '../../models';
import { GradeService } from '../../services';

export const CONTROL_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GradeSelectComponent),
  multi: false
};

@Component({
  selector: 'app-grade-select',
  templateUrl: './grade-select.component.html',
  styleUrls: ['./grade-select.component.scss'],
  providers:[CONTROL_PROFILE_VALUE_ACCESSOR]
})
export class GradeSelectComponent {

  _selectGrade: any;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;
  _grades: any;
  grade: GradeModel;

  @Output() onGradeChange:EventEmitter<string> = new EventEmitter

  @Input('selectGrade') set selectGrade(grade:GradeModel) {
    this.selectGrade = grade;
  }

  get selectGrade() {
    return this.selectGrade;
  }

  constructor(private gradeSvc:GradeService) { 
    this.grade = new GradeModel;
  }

  writeValue(obj: any): void {
    this._selectGrade = this.gradeSvc.getGrade(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getGrades(){
    return this.gradeSvc.getListGrades().subscribe(response => {
      console.log(response);
      this.grade = response;
    });
  } 

  onGradeClicked(grades:GradeModel, accordion:IonAccordionGroup){
    this.selectGrade = grades;
    accordion.value='';
    this.propagateChange(this.selectGrade);
  }

}
