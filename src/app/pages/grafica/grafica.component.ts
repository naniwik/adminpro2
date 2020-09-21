import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [],
})
export class GraficaComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Grafica1',
    'Grafica2',
    'Grafica3',
    'Grafica4'
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],  [30, 50, 300],  [35, 40, 10] ,  [390, 490, 900]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {
  }

}
