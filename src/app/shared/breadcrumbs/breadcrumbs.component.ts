import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  titulo: string = '';
  public tituloSubscription: Subscription;

  constructor(private router: Router) {
    this.tituloSubscription = this.getObservable().subscribe((event) => {
      this.titulo = event.titulo;
      document.title = `AdminPro - ${this.titulo}`;
    });
  }

  getObservable(): Observable<Data> {
    return this.router.events.pipe(
      filter(
        (event) => event instanceof ActivationEnd && event.snapshot.data.titulo
      ),
      map((f: ActivationEnd) => f.snapshot.data)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.tituloSubscription.unsubscribe();
  }
}
