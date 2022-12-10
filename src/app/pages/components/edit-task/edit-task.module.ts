import { NgModule } from '@angular/core';
import { EditTaskPageRoutingModule } from './edit-task-routing.module';
import { EditTaskPage } from './edit-task.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    EditTaskPageRoutingModule
  ],
  declarations: [EditTaskPage]
})
export class EditTaskPageModule {}
