import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditStudentPage } from './edit-student.page';

const routes: Routes = [
  {
    path: '',
    redirectTo:'-1',
    pathMatch:'full'
  },
  {
    path: ':id',
    component: EditStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditStudentPageRoutingModule {}
