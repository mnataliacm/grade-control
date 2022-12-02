import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GradeService } from 'src/app/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})
export class GradesPage {

  _grades: any;

  constructor(
    private gradeSvc: GradeService,
  ) { 
    this._grades = [];
  }

  ionViewWillEnter() {
    this.getAllGrades();
  }

  getAllGrades() {
    this.gradeSvc.getListGrades().subscribe(response => {
      console.log(response);
      this._grades = response;
    })
  }

}
