import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import es from '@angular/common/locales/es';
import en from '@angular/common/locales/en';
import { DateTimeSelectComponent } from './components/date-time-select/date-time-select.component';
import { GradeSelectComponent, ProfileComponent } from './components';

registerLocaleData(en);
registerLocaleData(es);

@NgModule({
  declarations: 
  [
    DateTimeSelectComponent,
    ProfileComponent,
    GradeSelectComponent,
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
    DateTimeSelectComponent,
    ProfileComponent,
    GradeSelectComponent,
  ],
  providers: [
  {
    provide: LOCALE_ID,
    useValue: 'es'
  },
]
})

export class CoreModule { }
