import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LaunchpadComponent } from './page/launchpad/launchpad.component';
import { DigitalSignalProcessingComponent } from './page/digital-signal-processing/digital-signal-processing.component';
import { AudComponent } from './page/aud/aud.component';
import { HeaderComponent } from './components/header/header.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LaunchpadComponent,
    DigitalSignalProcessingComponent,
    AudComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
   
    
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
            //client Id go here
             '435890643287-crjh5ml02lcm8jlv9p9l1kmv3thendco.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
