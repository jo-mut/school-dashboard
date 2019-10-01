import { Component, OnInit } from '@angular/core';
import { Award, Activity, Events, Project } from './dashboard.models';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  operationCostChart: Chart = null;
  graduatesChart: Chart = null;
  intakesChart: Chart = null;
  performanceChart: Chart = null;

  constructor() { }

  ngOnInit() {
   this.operatingCost = this.operatingCost();
   this.graduatesChart = this.graduates();
   this.intakesChart = this.intakes();
   this.performanceChart = this.perfomance();
  }

  private operatingCost(): Chart {
    var data = {
      labels: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Monthly operating cost",
        fill: true,
        fillColor: 'rgb(0, 0, 255)',
        backgroundColor: "#b0bec5",
        borderColor: 'b0bec5',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: 'b0bec5',
        pointBorderColor: 'b0bec5',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [3.5, 4.0, 2.9, 3.4, 4.2, 3.9, 5.0, 4.9, 4.6, 4.1, 4.0, 2.0],

      }]
    };

    var myChart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: data,
      options: {
        legend: { display: false },
        responsive: true,
        title: {
          display: true,
          text: 'Monthly operation cost in millions'
        }
      }
    });

    return myChart;
  }

  private intakes(): Chart {
    var intakes = {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: "Student intake per year since 2010",
        fill: true,
        fillColor: '#b0bec5',
        borderDash: [],
        borderWidth: 0,
        borderDashOffset: 0.0,
        pointBackgroundColor: '#b0bec5',
        pointBorderColor: '#b0bec5',
        pointHoverBackgroundColor: '#b0bec5',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [3000, 4500, 2900, 3400, 4200, 3900, 5000, 4090, 4060, 4010],
      }]
    };

    var intakeChart = new Chart(document.getElementById('intakes'), {
      type: 'line',
      data: intakes,
      options: {
        legend: { display: false },
        responsive: true,
        title: {
          display: true,
          text: 'Monthly operation cost in millions'
        }
      }
    });

    return intakeChart;

  }

  private graduates(): Chart {
    var graduates = {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      datasets: [{
        label: "Graduate per year since 2010",
        fill: true,
        borderDash: [],
        borderWidth: 0,
        borderDashOffset: 0.0,
        pointBackgroundColor: '#b0bec5',
        pointBorderColor: '#b0bec5',
        pointHoverBackgroundColor: '#b0bec5',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [300, 1000, 2900, 3000, 4000, 3500, 4100, 3490, 3060, 4010],
      }]
    };


    var graduatesChart = new Chart(document.getElementById('graduates'), {
      type: 'line',
      data: graduates,
      options: {
        legend: { display: false },
        responsive: true,
        title: {
          display: true,
          text: 'Monthly operation cost in millions'
        }
      }
    });

    return graduatesChart;

  }

  private perfomance(): Chart {
    var perfomance = {
      labels: ['2015', '2015', '2015', '2018'],
      datasets: [{
        fill: true,
        borderColor: 'b0bec5',
        borderWidth: 2,
        borderDash: [],
        backgroundColor: "#b0bec5",
        borderDashOffset: 0.0,
        pointBackgroundColor: 'b0bec5',
        pointBorderColor: 'b0bec5',
        pointHoverBackgroundColor: '#b0bec5',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [8.45, 9.82, 6.81, 10.49],
      }]
    };


    var performanceChart = new Chart(document.getElementById('perfomance'), {
      type: 'horizontalBar',
      data: perfomance,
      options: {
        legend: { display: false },
        responsive: true,
        title: {
          display: true,
          text: 'Perfomance for the last 4 years'
        }
      }
    });

    return performanceChart;

  }

}
