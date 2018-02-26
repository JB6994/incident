import { Component, OnInit } from '@angular/core';
import {Incident} from '../../../model/incident.model';
import {IncidentService} from '../../../service/incident.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-incidentlist',
  templateUrl: './incidentlist.component.html',
  styleUrls: ['./incidentlist.component.css']
})
export class IncidentlistComponent implements OnInit {

  incidents: Array<Incident>;
  cols: Array<any>;

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
    this.incidentService.list().subscribe(list => {
      this.incidents = list;
    });
    this.cols = [
      { header: 'id', field: 'id'},
      {header: 'titre', field: 'titre'},
      {header: 'email', field: 'email'},
      {header: 'description', field: 'description'},
      {header: 'level', field: 'level'},
      {header: 'type', field: 'type'},
      {header: 'progress', field: 'progress'},
      {header: 'date creation', field: 'dateCreation'},
      {header: 'date modification', field: 'dateModification'}
    ];
  }

}
