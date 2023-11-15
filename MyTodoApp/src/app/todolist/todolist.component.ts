import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoInputWidthDirective } from '../auto-input-width.directive';
import { ListBoxComponent } from '../list-box/list-box.component';
import { ChucknorrisService, Joke } from '../chucknorris.service';
import { Router } from '@angular/router';

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
  todoText = signal('');
  todos = signal<Todo[]>([]);
  priority = signal<Priority>('normal');
  updateTodoIndex = signal(-1);
  isEditMode = signal(false);
  jokeText = signal('');
  chucknorrisService: ChucknorrisService = inject(ChucknorrisService);
  router = inject(Router);

  changeTodoText(event: Event) {
    const changeText = (event.target as HTMLInputElement).value;
    this.todoText.set(changeText) ;
  }

  changePriority(event: Event) {
    const changePriority = (event.target as HTMLInputElement).value as Priority;
    this.priority.set(changePriority);
  }

  addTodo() {
    const todo: Todo = {
      text: this.todoText(),
      isCompleted: false,
      priority: this.priority(),
    }
    
    this.todos.update(todos => [...todos, todo]);
    this.todoText.set('');
  }

  editTodo(todoIndex: number) {
    this.isEditMode.set(true);
    this.updateTodoIndex.set(todoIndex);

    const todo = this.todos()[todoIndex];
    this.todoText.set(todo.text);
    this.priority.set(todo.priority);
  }

  updateTodo() {
    this.isEditMode.set(false);

    const todo = this.todos()[this.updateTodoIndex()];
    todo.text = this.todoText();
    todo.priority = this.priority();

    this.todoText.set('');
    this.updateTodoIndex.set(-1);
  }

  completeTodo(todoIndex: number, isCompleted: boolean) {
    this.todos()[todoIndex].isCompleted = isCompleted;
    
    if (isCompleted) {
      this.chucknorrisService.loadJoke().subscribe((joke: Joke) => {
        this.jokeText.set(joke.value);
      })
    }
  }

  removeTodo(todoIndex: number) {
    this.todos.update(todos => todos.filter((_, index) => index !== todoIndex));
  }

  goToAboutMePage() {
    this.router.navigate(['about'], {
      state: this.todos()[0],  
      queryParams: { 'big-title': 'true' },
      fragment: 'disclaimer'
    });
  }
}
