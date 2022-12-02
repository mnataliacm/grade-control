import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;

  onEditClick(){
    this.onEdit.emit(this.student);
  }

  onDeleteClick(){
    this.onDelete.emit(this.student);
  }

  @ViewChild('popover') popover;

  isOpen = false;

  presentPopover(e:Event) {
    this.popover.Event = e
    this.isOpen = true;
  }

  onDismiss(result){
    this.popover.dismiss(null, 'cancel');
  }

}
