import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private licktheme = document.querySelector('#theme');

  constructor() {}

  public iniTheme(): void {
    const theme = sessionStorage.getItem('theme');
    console.log(theme);
    if (theme) {
      const url: string = this.licktheme.getAttribute('href') as string;
      const urlbase =
        url.substring(0, url.lastIndexOf('/') + 1) + theme + '.css';
      this.licktheme.setAttribute('href', urlbase);
    }
  }
}
