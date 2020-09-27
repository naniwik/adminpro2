import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.getUsers().then((usuarios) => {
    //   console.log(usuarios);
    // });
  }

  // getUsers(): Promise<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return new Promise((resolve) => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((body) => resolve(body.data));
  //   });
  // }
}
