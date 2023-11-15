import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path:  '',
        component: TodolistComponent
    },
    {
        path:  'about',
        component: AboutMeComponent
    },
    {
        path:  'about/:username',
        component: AboutMeComponent
    },
    {
        path:  '**',
        component: NotFoundComponent
    }
];
