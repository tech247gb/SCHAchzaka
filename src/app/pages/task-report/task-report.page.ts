import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-report',
  templateUrl: './task-report.page.html',
  styleUrls: ['./task-report.page.scss'],
})
export class TaskReportPage implements OnInit {
  task = {};
  constructor() {}

  ngOnInit() {
    this.task = JSON.parse(localStorage.task);
  }

}
