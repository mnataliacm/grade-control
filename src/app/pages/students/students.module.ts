import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { StudentsPageRoutingModule } from './students-routing.module';
import { StudentsPage } from './students.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    StudentsPageRoutingModule
  ],
  declarations: [StudentsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StudentsPageModule {}
