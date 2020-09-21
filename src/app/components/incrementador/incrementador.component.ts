import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  @Output() resultprogreso: EventEmitter<number> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
    this.btnClass = 'btn ' + this.btnClass;
  }

  modifyProgress(mod: number): void {
    this.progreso += mod;
    this.progreso = Math.max(0, this.progreso);
    this.progreso = Math.min(100, this.progreso);
    this.resultprogreso.emit(this.progreso);
  }

  // tslint:disable-next-line:typedef
  getProcess() {
    this.resultprogreso.emit(this.progreso);
  }

  // tslint:disable-next-line:typedef
  onChange(valor: number) {
    // console.log(valor);
    this.progreso = valor;
    this.modifyProgress(0);
    // console.log(this.progreso);
    // const elem: HTMLElement = document.getElementsByName('progreso')[0];
    // elem.nodeValue = '' + this.progreso;
  }
}
