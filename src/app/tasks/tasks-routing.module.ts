import { Routes } from '@angular/router';

import { ListTaskComponent } from './list-task';
import { RegisterTaskComponent } from './register';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list-task'
    },
    {
        path: 'tasks/list-task',
        component: ListTaskComponent
    },
    {
        path: 'tasks/register',
        component: RegisterTaskComponent
    }
];