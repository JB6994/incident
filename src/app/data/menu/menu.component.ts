import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Home',
      items: [
        {label: 'Retour accueil', icon: 'fa fa-home', routerLink: '/home'}
      ]
    },
      {
        label: 'Incident',
        items: [
          {label: 'Nouveau', icon: 'fa-plus'},
          {label: 'Liste', icon: 'fa-th-list', routerLink: '/incidents'}
        ]
      }];
  }

}
