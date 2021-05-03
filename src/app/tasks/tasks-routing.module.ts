import { Routes } from '@angular/router';
import { EditTaskComponent } from './edit';

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
    },
    {
        path: 'tasks/edit/:id', // (:) is a Angular parameter operator
        component: EditTaskComponent
    }
];