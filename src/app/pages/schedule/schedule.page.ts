import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { StudentService } from 'src/app/core';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  public calendarOptions: CalendarOptions = this.initCalendar();

  constructor(
    //private assignmentsService:AssignmentService,
    private studentSvc: StudentService,
    private tasksSvc: TaskService,
    private containerRef: ViewContainerRef
  ) {
    // this.assignmentsService._assigns$.subscribe((tasks)=>{     
    //   this.calendarOptions = {
    //     locale:esLocale,
    //     initialView: 'timeGridDay',
    //     height: 'auto',
    //     slotDuration: '00:30:00',
    //     slotLabelInterval: '00:30',
    //     eventOverlap:false,
    //     contentHeight:'auto',
    //     eventChange:(event)=>{
    //       console.log(event.event.start);
    //       console.log(event.event.extendedProps.assignment.dateTime)         
    //       var assignment = {...event.event.extendedProps.assignment};
    //       assignment.dateTime = moment(event.event.start).toISOString();
    //       this.assignmentsService.updateAssignment(assignment);         
    //     },
    //     editable:true,
    //     events: tasks.map(a=>{
    //       var task = this.tasksService.getTaskById(a.taskId);
    //       return {
    //         "title":task.name, 
    //         "start":moment(a.dateTime).toISOString(), 
    //         "end":moment(a.dateTime).add(task.time, 'seconds').toISOString(),
    //         "assignment":a
    //       };
    //     }),
    //     eventContent:(arg)=>{
    //       var comp:ComponentRef<AssignmentScheduleComponent> = this.containerRef.createComponent(AssignmentScheduleComponent);
    //       comp.instance.assign = arg.event.extendedProps.assignment;
    //       return { domNodes: [comp.location.nativeElement] }

    //     }
    //  };     
    //});
  }

  public ngOnInit(): void {
    // HACK Rerender the calendar and correctly display it
    setTimeout(() => {
      this.calendarOptions.footerToolbar = false;
    }, 300);
  }

  private initCalendar(): CalendarOptions {
    return {
      initialView: 'timeGridWeek',
      height: 'auto',
      slotDuration: '01:00:00',
      slotLabelInterval: '01:00',
      editable: true,
      slotMinTime: '08:00:00',
      slotMaxTime: '16:00:00',
      // eventLimit: true,
      // weekend: false,
      // columnFormat: 'dddd',
      // header: {
      //   	left: 'prev,next today',
      //   	center: 'title',
      //   	right: 'month,agendaWeek,agendaDay'
      //   },
    //   businessHours: {
    //     daysOfWeek: [ 1, 2, 3, 4, 5 ],
    // startTime: '08:00',
    // endTime: '1:00',
    //   },

      events: [
      ],
    };
  }

}
