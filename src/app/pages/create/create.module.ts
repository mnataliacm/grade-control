import { NgModule } from '@angular/core';
import { CreatePageRoutingModule } from './create-routing.module';
import { CreatePage } from './create.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    CreatePageRoutingModule
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
