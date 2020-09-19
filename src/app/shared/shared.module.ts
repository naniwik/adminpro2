import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarrightComponent } from './sidebarright/sidebarright.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    SidebarrightComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    SidebarrightComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
