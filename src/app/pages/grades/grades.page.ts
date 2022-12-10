import { Component, Output } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Observable, observable } from 'rxjs';
import { GradeModel, GradeService, ProfileComponent } from 'src/app/core';
import { isLowResolution as lowres} from 'src/app/utils/screen.utils';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.page.html',
  styleUrls: ['./grades.page.scss'],
})
export class GradesPage {

  _grades: any;
  @Output() grades = this.getAllGrades
  isLowResolution:()=>boolean = lowres;

  constructor(
    private modal: ModalController,
    private gradeSvc: GradeService,
    private translate: TranslateService
  ) { 
    
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

  onClick1(slide:IonItemSliding, grade: GradeModel){
    this.presentModules(grade);
    slide.close();
  }

  onClick2(slide:IonItemSliding, grade: GradeModel){
    this.presentModules(grade);
    slide.close();
  }

  async presentModules(grade: GradeModel) {
    const modal = await this.modal.create({
      component: ProfileComponent,
      componentProps: {
        grade: grade
      }
    });

    modal.present();
    
  }
}
