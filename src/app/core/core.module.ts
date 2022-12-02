import { LOCALE_ID, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import { GradeComponent } from './components';

import es from '@angular/common/locales/es';
import en from '@angular/common/locales/en';
registerLocaleData(en);
registerLocaleData(es);

@NgModule({
  declarations: 
  [
    GradeComponent,


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
    GradeComponent,

  ],
  providers: [
  {
    provide: LOCALE_ID,
    useValue: 'es'
  },
],
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class CoreModule { }

/*

*/