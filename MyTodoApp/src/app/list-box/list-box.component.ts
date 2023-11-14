import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todolist/todolist.component';

@Component({
  selector: 'app-list-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-box.component.html',
  styleUrl: './list-box.component.scss'
})
export class ListBoxComponent {
  @Input({ required: true })
  todos: Todo[] = [];

  @Output()
  completeTodoChanged = new EventEmitter<{ todoIndex: number, isCompleted: boolean }>();

  @Output()
  editTodoClicked = new EventEmitter<number>();

  @Output()
  removeTodoClicked = new EventEmitter<number>();

  completeTodo(todoIndex: number, isCompleted: boolean) {
    this.completeTodoChanged.emit({
      todoIndex,
      isCompleted: isCompleted
    })
  }

  editTodo(todoIndex: number) {
    this.editTodoClicked.emit(todoIndex);
  }

  removeTodo(todoIndex: number) {
    this.removeTodoClicked.emit(todoIndex);
  }

  getTodoItemStyle(todo: Todo) {
    return {
      done: todo.isCompleted,
      'priority-high': todo.priority === 'high',
    }
  }
}
