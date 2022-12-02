import { NgModule } from '@angular/core';
import { EditPageRoutingModule } from './edit-routing.module';
import { EditPage } from './edit.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    EditPageRoutingModule
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
