import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarServiceService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Progress', url: '/dashboard/progress' },
        { titulo: 'Graficas', url: '/dashboard/grafica' },
      ],
    },
  ];
  constructor() {}
}
