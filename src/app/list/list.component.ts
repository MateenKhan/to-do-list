import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public swipe = 0;
  uncompletedTasks = ['call Mr.x', 'get money from Mr.y'];
  completedTasks = [];
  newTask: string;
  swipeDirection: string;
  taskType = 'todo';
  tasksToDisplay = [];
  constructor() { }

  ngOnInit() {
    this.tasksToDisplay = this.uncompletedTasks;
  }

  newItem() {

  }

  // swipeEvent(e: any) {
  //   this.swipe++;
  //   switch (e.direction) {
  //     case 2:
  //       this.swipeDirection = 'Right to Left';
  //       break;
  //     case 4:
  //       this.swipeDirection = 'Left to Right';
  //       break;
  //     default:
  //         this.swipeDirection = 'Left to Right';
  //   }

  //   console.log(e);

  // }

  udpateTodo() {
    this.uncompletedTasks.push(this.newTask);
    this.newTask = '';
  }


  moveToComplete(task: string) {
    this.completedTasks.push(task);
    for (let i = 0; i < this.uncompletedTasks.length; i++) {
      if (this.uncompletedTasks[i] === task) {
        delete this.uncompletedTasks[i];
        return;
      }
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
