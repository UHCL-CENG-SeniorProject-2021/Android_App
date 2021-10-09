import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudComponent } from './page/aud/aud.component';
import { DigitalSignalProcessingComponent } from './page/digital-signal-processing/digital-signal-processing.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LaunchpadComponent } from './page/launchpad/launchpad.component';

const routes: Routes = [
  { path: '', pathMatch: "full",redirectTo: "home" },
  { path: 'home-page', component: HomePageComponent },
  { path: 'launchpad', component: LaunchpadComponent },
  { path: 'dsp', component: DigitalSignalProcessingComponent },
  { path: 'aud', component: AudComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }

