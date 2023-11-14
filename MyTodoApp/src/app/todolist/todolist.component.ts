import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoInputWidthDirective } from '../auto-input-width.directive';
import { ListBoxComponent } from '../list-box/list-box.component';

export type Priority = 'low' | 'normal' | 'high';

export interface Todo {
  text: string;
  isCompleted: boolean;
  priority: Priority;
}

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, AutoInputWidthDirective, ListBoxComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  todoText: string = '';
  todos: Todo[] = [];
  updateTodoIndex: number = -1;
  isEditMode = false;
  priority: Priority = 'normal';

  changeTodoText(event: Event) {
    this.todoText = (event.target as HTMLInputElement).value;
  }

  changePriority(event: Event) {
    this.priority = (event?.target as HTMLInputElement).value as Priority;
  }

  addTodo() {
    const todo: Todo = {
      text: this.todoText,
      isCompleted: false,
      priority: this.priority,
    }
    
    this.todos.push(todo);
    this.todoText = '';
  }

  editTodo(todoIndex: number) {
    this.isEditMode = true;
    this.updateTodoIndex = todoIndex;

    const todo = this.todos[this.updateTodoIndex];
    this.todoText = todo.text;
    this.priority = todo.priority;
  }

  updateTodo() {
    this.isEditMode = false;

    const todo = this.todos[this.updateTodoIndex];
    todo.text = this.todoText;
    todo.priority = this.priority;

    this.todoText = '';
    this.updateTodoIndex = -1;
  }

  completeTodo(todoIndex: number, isCompleted: boolean) {
    this.todos[todoIndex].isCompleted = isCompleted;
  }

  removeTodo(todoIndex: number) {
    this.todos.splice(todoIndex, 1);
  }  
}
