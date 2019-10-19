import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [Keyboard]
})
export class ListComponent implements OnInit {

  uncompletedTasks = [{ index: 0, value: 'call Mr.x' }, { index: 1, value: 'get money from Mr.y' }];
  completedTasks = [];
  newTask: string;
  taskType = 'todo';
  tasksToDisplay = [];

  constructor(private keyboard: Keyboard) { }


  ngOnInit() {
    this.tasksToDisplay = this.uncompletedTasks;
  }

  showKeyboard() { this.keyboard.show(); }

  hideKeyboard() { this.keyboard.hide(); }

  udpateTodo() {
    console.log(this.keyboard);
    if (this.newTask) {
      this.uncompletedTasks.push({ index: this.uncompletedTasks.length, value: this.newTask });
      this.newTask = '';
      let closebutton : HTMLElement = document.getElementById('closeKeyboard') as HTMLElement;
      console.log(closebutton);
      closebutton.click();
    }
  }


  moveToComplete(index: number, task: string) {
    this.completedTasks.push({ index: this.completedTasks.length, value: task });
    this.uncompletedTasks.splice(index, 1);
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
