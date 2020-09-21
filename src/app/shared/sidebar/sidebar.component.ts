import { Component, OnInit } from '@angular/core';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  constructor(public ser: SidebarServiceService) {}

  ngOnInit(): void {}
}
