import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTaskComponent } from './list-task';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list-task'
    },
    {
        path: 'tasks/list-task',
        component: ListTaskComponent
    },
];
