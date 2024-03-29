import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import es from '@angular/common/locales/es';
import en from '@angular/common/locales/en';
import { DateTimeSelectableComponent } from './components/date-time-selectable/date-time-selectable.component';
import { AssignScheduleComponent, GradeSelectComponent, ProfileComponent } from './components';

registerLocaleData(en);
registerLocaleData(es);

@NgModule({
  declarations: 
  [
    DateTimeSelectableComponent,
    ProfileComponent,
    GradeSelectComponent,
    AssignScheduleComponent
  ],
  imports: 
  [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
    }),
    
  ],
  exports: 
  [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    DateTimeSelectableComponent,
    ProfileComponent,
    GradeSelectComponent,
    AssignScheduleComponent
  ],
  providers: [
  {
    provide: LOCALE_ID,
    useValue: 'es'
  },
]
})

export class CoreModule { }
