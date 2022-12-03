import { Component, Input, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { isLowResolution as lowres} from 'src/app/utils/screen.utils';
import { EventEmitter } from 'stream';
import { TaskModel } from '../../models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {

  // @Output() onEdit = new EventEmitter;
  // @Output() onDelete = new EventEmitter;
  // @Input() task:TaskModel | undefined;
  // isLowResolution = lowres;

  // onEditClick(slide:IonItemSliding){
  //   slide.close();
  //   this.onEdit.emit(this.task);
  // }

  // onDeleteClick(slide:IonItemSliding){
  //   slide.close();
  //   this.onDelete.emit(this.task);
  // }

}
