import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'publis-midia-kit',
  templateUrl: './publis-midia-kit.component.html',
  styleUrls: ['./publis-midia-kit.component.scss'],
})
export class PublisMidiaKitComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = [
      {
        label: 'Update',
      },
      {
        label: 'Delete',
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] },
    ];
  }
}
