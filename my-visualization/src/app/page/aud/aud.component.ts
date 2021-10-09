import { Component } from '@angular/core';
import { AngularWavesurferServiceOptions } from 'angular-wavesurfer-service';


@Component({
  selector: 'app-aud',
  templateUrl: './aud.component.html',
  styleUrls: ['./aud.component.scss']
})
export class AudComponent {
  wavesurferOptions2: AngularWavesurferServiceOptions;

  constructor() {
    this.wavesurferOptions2 = {
      backgroundColor: 'white',
      cursorColor: '#fbff00',
      progressColor: '#555',
      waveColor: 'white',
      barGap: 12,
      barHeight: 1,
      barMinHeight: 1,
      barRadius: 6,
      barWidth: 12,
      normalize: true,
      splitChannels: true,
      splitChannelsOptions: {
        overlay: true,
        relativeNormalization: true
      }
    };
  }

}
