// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Angular
import { LoadComponent } from './views/components/load/load.component';
import { Page404Component } from './views/components/page404/page404.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { HomeComponent } from './views/pages/home/home.component';
import { TermsComponent } from './views/pages/terms/terms.component';

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
    path: 'about',
    component: AboutComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  },
  {
      path: 'terms',
      component: TermsComponent
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
