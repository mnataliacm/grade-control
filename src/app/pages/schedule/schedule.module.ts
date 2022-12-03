import { NgModule } from '@angular/core';
import { SchedulePageRoutingModule } from './schedule-routing.module';
import { SchedulePage } from './schedule.page';
import { CoreModule } from 'src/app/core/core.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import scrollgridPlugin from '@fullcalendar/scrollgrid';
import daygridPlugin from '@fullcalendar/daygrid';
import timegridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  scrollgridPlugin,
  daygridPlugin,
  timegridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CoreModule,
    SchedulePageRoutingModule,
    FullCalendarModule
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
