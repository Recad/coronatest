import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  datatemp = [];
  flagstemp = [];
  constructor(
    private WeatherService: WeatherService,
    private datePipe: DatePipe
  ) {}
  //Pare de formulario para cambiar tipo de grafica
  name = new FormControl('');
  selected = '';

  CambiarGraph(valor) {
    //this.name.setValue('Nancy');
    //codigo para cambiar tipo de grafica
    this.datatemp = [];
    this.flagstemp = [];
    switch (valor) {
      case 'Sexo':
        this.WeatherService.getCasosSexo().subscribe(
          (data) => {
            console.log(data);
            data.forEach((element) => {
              this.datatemp.push(element['casos']);
              this.flagstemp.push(element['sexo']);
            });
            this.chart.chart.data.datasets[0].data = this.datatemp;
            this.chart.chart.data.labels = this.flagstemp;
            this.chart.chart.update();
          },
          (error) => {
            console.error(error);
          }
        );
        break;
      case 'Dias':

        this.WeatherService.getCasosDias().subscribe(
          (data) => {
            console.log(data);
            data.forEach((element) => {
              this.datatemp.push(element['casos']);
              this.flagstemp.push(
                this.datePipe.transform(element['fecha'], 'yyyy-MM-dd')
              );
            });
            this.chart.chart.data.datasets[0].data = this.datatemp;
            this.chart.chart.data.labels = this.flagstemp;
            this.chart.chart.update();
          },
          (error) => {
            console.error(error);
          }
        );
        break;
      default:
        this.WeatherService.getCasosCiudades().subscribe(
          (data) => {
            console.log(data);
            data.forEach((element) => {
              this.datatemp.push(element['casos']);
              this.flagstemp.push(element['ciudad']);
            });
            this.chart.chart.data.datasets[0].data = this.datatemp;
            this.chart.chart.data.labels = this.flagstemp;
            this.chart.chart.update();
          },
          (error) => {
            console.error(error);
          }
        );
        break;
    }
    //this.datatemp = [95, 72, 78, 75, 77, 75];

    this.chart.chart.update();
  }
  ngOnInit() {
    this.WeatherService.getCasosDias().subscribe(
      (data) => {
        console.log(data);
        data.forEach((element) => {
          this.datatemp.push(element['casos']);
          this.flagstemp.push(
            this.datePipe.transform(element['fecha'], 'yyyy-MM-dd')
          );
        });
        this.chart.chart.data.datasets[0].data = this.datatemp;
        this.chart.chart.data.labels = this.flagstemp;
        this.chart.chart.update();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  lineChartData: ChartDataSets[] = [
    { data: this.datatemp, label: 'Casos coronavirus Colombia' },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}
