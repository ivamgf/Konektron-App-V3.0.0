import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './views/components/header/header.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { LoadComponent } from './views/components/load/load.component';
import { Page404Component } from './views/components/page404/page404.component';
import { AboutComponent } from './views/pages/about/about.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { HomeComponent } from './views/pages/home/home.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { ForgotComponent } from './views/sign/forgot/forgot.component';
import { SigninComponent } from './views/sign/signin/signin.component';
import { SignupComponent } from './views/sign/signup/signup.component';
import { ProfileComponent } from './views/dashboard/profile/profile.component';
import { RecoveryComponent } from './views/dashboard/recovery/recovery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoadComponent,
    Page404Component,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    TermsComponent,
    ForgotComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
