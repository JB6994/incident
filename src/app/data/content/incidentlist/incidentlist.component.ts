import { Component, OnInit } from '@angular/core';
import {Incident} from '../../../model/incident.model';
import {IncidentService} from '../../../service/incident.service';

@Component({
  selector: 'app-incidentlist',
  templateUrl: './incidentlist.component.html',
  styleUrls: ['./incidentlist.component.css']
})
export class IncidentlistComponent implements OnInit {

  incidents: Array<Incident>;

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    this.incidentService.list().subscribe(list => {
      this.incidents = list;
    });
  }

}
