import { Component, Input, Output, EventEmitter} from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { isLowResolution as lowres} from 'src/app/utils/screen.utils';
import { GradeModel } from '../../models';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss'],
})
export class GradeComponent {

  @Output() click1 = new EventEmitter;
  @Output() click2 = new EventEmitter;
  @Input() grade = GradeModel;
  isLowResolution:()=>boolean = lowres;

  onClick1(slide:IonItemSliding){
    slide.close();
    this.click1.emit(this.grade);
  }

  onClick2(slide:IonItemSliding){
    slide.close();
    this.click2.emit(this.grade);
  }
}
