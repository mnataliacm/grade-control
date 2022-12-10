import { Component} from '@angular/core';
import { GradeService } from 'src/app/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage {

  _grades: any;


  constructor(
    private gradeSvc: GradeService
  ) { }

  ionViewWillEnter() {
    this.getAllModules();
  }

  getAllModules() {
    this.gradeSvc.getListGrades().subscribe(response => {
      console.log(response);
      this._grades = response;
    })
  }

}
