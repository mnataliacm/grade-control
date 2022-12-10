import { NgModule } from '@angular/core';
import { EditStudentPageRoutingModule } from './edit-student-routing.module';
import { EditStudentPage } from './edit-student.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    EditStudentPageRoutingModule
  ],
  declarations: [EditStudentPage]
})
export class EditStudentPageModule {}
