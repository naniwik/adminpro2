import { Component, AfterViewChecked } from '@angular/core';
import { ServiceService } from '../services/service.service';
// tslint:disable-next-line:typedef
declare function cumtomInitFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements AfterViewChecked {
  constructor(private service: ServiceService) {}

  ngAfterViewChecked(): void {
    cumtomInitFunction();
    this.service.iniTheme();
  }
}
