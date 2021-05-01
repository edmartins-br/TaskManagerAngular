import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [

]

@NgModule({
    imports: [ RouterModule.orRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}