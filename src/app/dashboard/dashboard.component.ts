import { Component, OnInit } from '@angular/core';
import { Award, Activity, Events, Project } from './dashboard.models';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private canvas;
  private context;
  public awards: Array<Award> = null;
  public activities: Array<Activity> = null;
  public events: Array<Events> = null;
  public projects: Array<Project> = null;

  private lorem: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Incidunt quibusdam praesentium...`
  private image = "assets/images/img.jpg";
  private time = Date.now();


  constructor() { }

  ngOnInit() {
    this.schoolActivities();
    this.schoolAwards();
    this.schoolEvents();
    this.schoolProjects();

  }

  public chartData(): Chart {
    var data = {
      labels: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Monthly operating cost",
        fill: true,
        // backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [3.5, 4.0, 2.9, 3.4, 4.2, 3.9, 5.0, 4.9, 4.6, 4.1, 4.0, 2.0],
        dat: [3.5, 4.0, 2.9, 3.4, 4.2, 3.9, 5.0, 4.9, 4.6, 4.1, 4.0, 2.0],

      }]
    };

    this.canvas = document.getElementById('chart');
    this.context = this.canvas.getContext('2d');
    var myChart = new Chart(this.context, {
      type: 'line',
      data: data,
    });

    return myChart;
  }

  schoolEvents() {
    const events = new Array<Events>(
      new Events(1, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(2, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(3, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(4, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(5, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(6, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(7, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(8, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(9, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),
      new Events(10, "Inter Schools Competitions", this.lorem, this.image, this.time.toString(), 300, "School Sport Complex"),)
      
      this.events = events.slice(0, 2);

  }

  schoolAwards() {
    const awards = new Array<Award>(
      new Award(1, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(2, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(3, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(4, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(5, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(6, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(7, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(8, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(9, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"),
      new Award(10, "School of the Year", this.lorem, this.image, this.time.toString(), "Convention Complex"));

    this.awards = awards.slice(0, 3);
  }

  schoolProjects() {
    const projects = new Array<Project>(
      new Project(1, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(2, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(3, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(4, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(5, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(6, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(7, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(8, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(9, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"),
      new Project(10, "Dining Hall", this.lorem, this.image, this.time.toString(), "School compound", "12th of Sep 2020"));

    this.projects = projects.slice(0, 5);
  }

  schoolActivities() {
    const activities = new Array<Activity>(
      new Activity(1, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(2, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(3, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(4, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(5, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(6, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(7, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(8, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(9, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"),
      new Activity(10, "Student Council Elections", this.lorem, this.image, this.time.toString(), "2nd of Feb 2020"));

    this.activities = activities.slice(0, 5);
  }

}
