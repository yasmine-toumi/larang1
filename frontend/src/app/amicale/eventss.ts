import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

export interface EventsExtendCalendEvent extends CalendarEvent{
  id: number;
  titre: any;
  description: any;
  date_devent: Date;
  date_overture_inscrit: any;
  date_cloture_inscrit: any;
  image:any;
  nb_place:number;
  statut:boolean;

}
export class Eventss {
  id: number;
  titre: any;
  description: any;
  date_devent: Date;
  date_overture_inscrit: any;
  date_cloture_inscrit: any;
  image: any;
  nb_place: number;
  statut: boolean;

}

