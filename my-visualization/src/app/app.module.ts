import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LaunchpadComponent } from './page/launchpad/launchpad.component';
import { DigitalSignalProcessingComponent } from './page/digital-signal-processing/digital-signal-processing.component';
import { AudComponent } from './page/aud/aud.component';
import { HeaderComponent } from './components/header/header.component';
// import { AngularWavesurferServiceModule } from 'angular-wavesurfer-service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    // AngularWavesurferServiceModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatRippleModule,
    MatSliderModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
