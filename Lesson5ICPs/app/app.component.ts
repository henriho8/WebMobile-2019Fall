import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css'] // ['./style.css'] ['./app.component.css']
})
export class AppComponent {
  title = 'To Do\'s';

  // define 2 list of items
  todoItems = ['Add To-Do Items'];
  compItems = ['Start To-Do App'];
  newItemFormControl = new FormControl('');
  newItem = '';
  items: any;

  // Write code to push new item
  submitNewItem() {
    this.todoItems.push(this.newItem);
    this.newItem = '';
  }

  // Write code to complete item
  completeItem(index) {
    this.compItems.push(this.todoItems[index]);
    this.todoItems.splice(index, 1);
  }

  // Write code to delete item
  deleteItem(index) {
    this.compItems.splice(index, 1);
  }

}
