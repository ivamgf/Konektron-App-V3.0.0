// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Angular
import { LoadComponent } from './views/components/load/load.component';
import { Page404Component } from './views/components/page404/page404.component';
import { HomeComponent } from './views/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
        redirectTo: 'load',
        pathMatch: 'full'
  },
  {
    path: 'load',
    component: LoadComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
