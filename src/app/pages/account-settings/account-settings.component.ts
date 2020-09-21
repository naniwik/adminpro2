import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  private licktheme: Element = document.querySelector('#theme');
  private list: NodeListOf<Element>;
  constructor() {}

  ngOnInit(): void {
    let theme: string = sessionStorage.getItem('theme') as string;
    if (!theme) {
      theme = 'default-dark';
    }
    this.list = document.querySelectorAll('.selector');
    this.checkCurrentTheme(theme);
  }

  public changeTheme(value: string): void {
    sessionStorage.setItem('theme', value);
    console.log(value);
    const url: string = this.licktheme.getAttribute('href') as string;
    const urlbase = url.substring(0, url.lastIndexOf('/') + 1) + value + '.css';
    this.licktheme.setAttribute('href', urlbase);
    this.checkCurrentTheme(value);
  }

  public checkCurrentTheme(theme: string): void {
    this.list.forEach((elem) => {
      elem.classList.remove('working');
      const btntheme = elem.getAttribute('data-theme');
      if (btntheme === theme) {
        elem.classList.add('working');
      }
    });
  }
}
