import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  uncompletedTasks = [{ index: 0, value: 'call Mr.x' }, { index: 1, value: 'get money from Mr.y' }];
  completedTasks = [];
  newTask: string;
  taskType = 'todo';
  tasksToDisplay = [];
  constructor() { }

  ngOnInit() {
    this.tasksToDisplay = this.uncompletedTasks;
  }

  udpateTodo() {
    this.uncompletedTasks.push({ index: this.uncompletedTasks.length, value: this.newTask });
    this.newTask = '';
  }


  moveToComplete(index: number, task: string) {
    this.completedTasks.push({ index: this.completedTasks.length, value: task });
    this.uncompletedTasks.splice(index, 1);
    // this.completedTasks.push(task);
    for (let i = 0; i < this.uncompletedTasks.length; i++) {
      this.uncompletedTasks[i].index = i;
    }
  }


  udpateTasksToDisplay() {
    if (this.taskType === 'completed') {
      this.tasksToDisplay = this.completedTasks;
    } else {
      this.tasksToDisplay = this.uncompletedTasks;
    }
  }
}
