import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskRoutes } from './tasks';


export const routes: Routes = [
    // all the routes will be listed here (URLs)
    {
        path:'', // if the path is empty, redirect to list-task
        redirectTo: '/tasks/list-task',
        pathMatch: 'full' // pass the complete URL
    },
    ...TaskRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}