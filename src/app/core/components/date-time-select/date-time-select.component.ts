import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { TaskService } from '../../services';

@Component({
  selector: 'app-date-time-select',
  templateUrl: './date-time-select.component.html',
  styleUrls: ['./date-time-select.component.scss']
})
export class DateTimeSelectComponent {

  _selectedDateTime: string = '';
  @Output() onDatetimeChange:EventEmitter<string> = new EventEmitter()

  @Input('selectedDateTime') set selectedDateTime(date:string){
    this._selectedDateTime = date;
  }

  get selectedDateTime(){
    return this._selectedDateTime;
  }

  constructor(
    private taskSvc: TaskService,
  ) { }

  getDateTime() {
    
  }

  onDateTimeChanged(dateTime:any, accordion:IonAccordionGroup) {
    this.selectedDateTime = dateTime.detail.value;
    accordion.value = '';
    this.onDatetimeChange.emit(this.selectedDateTime);
  }

  onConfirm(dateTime:IonDatetime, accordion:IonAccordionGroup) {
    dateTime.confirm();
  }

  onCancel(dateTime:IonDatetime, accordion:IonAccordionGroup) {
    dateTime.cancel();
    accordion.value = '';
  }
  
}
