import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todolist/todolist.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  username = signal('');
  isBigTitle = signal(false);
  todoTitle = signal('');

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['username']) {
        this.username.set(params['username']);
      }
    });

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      if (queryParams['big-title'] === 'true') {
        this.isBigTitle.set(true);
      }
    });

    this.activatedRoute.fragment.subscribe((fragment) => {
      if (fragment === 'disclaimer') {
        console.log('disclaimer');
      }
    });

    const todo = this.router.getCurrentNavigation()?.extras.state as Todo;
    this.todoTitle.set(todo?.text);
  }
}
