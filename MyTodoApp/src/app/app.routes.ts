import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';

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
        path:  'contact',
        component: ContactComponent
    },
    {
        path:  '**',
        component: NotFoundComponent
    }
];
