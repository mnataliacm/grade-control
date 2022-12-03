import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'students',
    loadChildren: () => import('./pages/students/students.module').then( m => m.StudentsPageModule)
  },
  {
    path: 'grades',
    loadChildren: () => import('./pages/grades/grades.module').then( m => m.GradesPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'new-student',
    loadChildren: () => import('./pages/components/new-student/new-student.module').then( m => m.NewStudentPageModule)
  },
  {
    path: 'new-task',
    loadChildren: () => import('./pages/components/new-task/new-task.module').then( m => m.NewTaskPageModule)
  },
  {
    path: 'edit-student',
    loadChildren: () => import('./pages/components/edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'edit-student/:id',
    loadChildren: () => import('./pages/components/edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'edit-task',
    loadChildren: () => import('./pages/components/edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  },
  {
    path: 'edit-task/:id',
    loadChildren: () => import('./pages/components/edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
