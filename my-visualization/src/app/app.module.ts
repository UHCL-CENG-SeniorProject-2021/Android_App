import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LaunchpadComponent } from './page/launchpad/launchpad.component';
import { DigitalSignalProcessingComponent } from './page/digital-signal-processing/digital-signal-processing.component';
import { AudComponent } from './page/aud/aud.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularWavesurferServiceModule } from 'angular-wavesurfer-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LaunchpadComponent,
    DigitalSignalProcessingComponent,
    AudComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularWavesurferServiceModule, 

  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
