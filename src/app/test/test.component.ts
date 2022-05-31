import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title: any;
  toDoList: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  submit(): void {
    if (this.title) {
      this.toDoList.push(this.title);
      this.title = '';
      this.saveToStorage();
    }
  }
  delete(index: number): void {
    this.toDoList.splice(index, 1);
    this.saveToStorage();
  }

  saveToStorage(): void {
    window.localStorage.setItem('toDo', JSON.stringify (this.toDoList));
  }
}
