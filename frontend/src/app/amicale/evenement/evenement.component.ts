import { JarwisService } from 'src/app/Services/jarwis.service';
import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit, AfterViewInit, OnChanges, AfterViewChecked } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Eventss ,EventsExtendCalendEvent} from '../eventss';
const colors: any = {
  //  red: {
  //   primary: '#ad2121',
  //    secondary: '#FAE3E3',
  //  },
  //  blue: {
  //    primary: '#1e90ff',
  //    secondary: '#D1E8FF',
  //  },
  //  yellow: {
  //    primary: '#e3bc08',
  //   secondary: '#FDF1BA',
  //  },
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['evenement.component.css'],
  templateUrl: 'evenement.component.html',
})
export class EvenementComponent implements OnInit, AfterViewChecked, AfterViewInit{
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;
  viewDate: Date = new Date();
  eventsse: Eventss[];
  events: EventsExtendCalendEvent[] = [];
  eventsClicked: EventsExtendCalendEvent[] = [];
  //ev: CalendarEvent;
  ev: EventsExtendCalendEvent;
  eventss: any;
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.eventss = this.eventss.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();



  activeDayIsOpen: boolean = true;
  showcalender: boolean;

  constructor(private modal: NgbModal, private Jarwis: JarwisService) { }
  refreshView(){
    this.refresh.next();
  }
  ngAfterViewInit():void{

  }
  ngAfterViewChecked():void{
    this.refresh.next();
  }
  ngOnInit(){
    this.getEventdata();
    console.log("oninit first");

  }
  getEventdata() {
    this.Jarwis.getevent().subscribe(data => {
      this.eventsse = data;
      this.eventsse.forEach(event => {
        this.ev = {
          start: new Date(event.date_devent),
          title: event.titre,
          color: colors.red,
          allDay: true,
          id: event.id,
          titre: event.titre,
          description: event.description,
          date_devent: event.date_devent,
          date_overture_inscrit: event.date_overture_inscrit,
          date_cloture_inscrit: event.date_cloture_inscrit,
          image: event.image,
          nb_place: event.nb_place,
          statut: event.statut

        }
        this.events.push(this.ev);
        this.eventsClicked=this.events;
        console.log(this.eventsClicked);
        this.showcalender = true;
      });

    });

  }
  deleteData(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.Jarwis.deletevent(id).subscribe(res => {
          this.getEventdata();
        });
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'

        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }

  dayClicked({ date, events }: { date: Date; events: EventsExtendCalendEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
      console.log(events);
      this.eventsClicked=events;
      console.log(this.eventsClicked);
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.eventss = this.eventss.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  //   // addEvent(): void {
  // this.events = [
  //   ...this.events,
  //   {
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //   },
  // ];
  //   // }

  // deleteEvent(eventToDelete: CalendarEvent) {
  //   this.eventss = this.eventss.filter((event) => event !== eventToDelete);
  // }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  openDialog() {

  }


  insertData() {
    // this.Jarwis.addagences(this.agence).subscribe(res => {
    //   this.getagence();
    // });
  }
}
