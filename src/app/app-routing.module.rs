import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    // all the routes will be listed here (URLs)
    
]

@NgModule({
    imports: [ RouterModule.orRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}