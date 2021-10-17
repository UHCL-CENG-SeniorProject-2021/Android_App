import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
// @ts-ignore
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js'

@Component({
  selector: 'app-aud',
  templateUrl: './aud.component.html',
  styleUrls: ['./aud.component.scss']
})
export class AudComponent implements OnInit {
  // for original
  wave: WaveSurfer;
  url = "https://ia800508.us.archive.org/15/items/LoveThemeFromTheGodfather/02LoveThemeFromTheGodfather.mp3";

  // for microphone
  waveMicro: WaveSurfer;

  constructor(private cdr: ChangeDetectorRef) {
  };

  ngOnInit() {
    this.loadWaveform();
    this.loadWaveMicro();
  }

  generateWaveform(): void {
    Promise.resolve(null).then(() => {
      this.wave = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        plugins: [],
        height: 100,
        maxCanvasWidth: 500
      });

      this.wave.on('ready', () => {
        const totalTime = Math.floor(this.wave.getDuration());
        const remainElement = document.getElementById('time-remain');
        remainElement!.innerText = `${Math.floor(totalTime / 60)}:${(totalTime % 60) < 10 ? '0' : ''}${totalTime % 60}`;
        // this.wave.play();
      });

      this.wave.on('audioprocess', () => {
        if (this.wave.isPlaying()) {
          const totalTime = Math.floor(this.wave.getDuration());
          const currentTime = Math.floor(this.wave.getCurrentTime());
          const remainTime = (totalTime - currentTime);

          const currentElement = document.getElementById('time-current');
          currentElement!.innerText = `${Math.floor(currentTime / 60)}:${(currentTime % 60) < 10 ? '0' : ''}${currentTime % 60}`;

          const remainElement = document.getElementById('time-remain');
          remainElement!.innerText = `${Math.floor(remainTime / 60)}:${(remainTime % 60) < 10 ? '0' : ''}${remainTime % 60}`;

        }
      })
    });
  }

  loadWaveform(): void {
    if (!this.wave) {
      this.generateWaveform();
    }

    this.cdr.detectChanges();

    Promise.resolve().then(() => this.wave.load(this.url));
  }

  stopWaveform() {
    this.wave.stop();
    const totalTime = Math.floor(this.wave.getDuration());
    const remainElement = document.getElementById('time-remain');
    remainElement!.innerText = `${Math.floor(totalTime / 60)}:${(totalTime % 60) < 10 ? '0' : ''}${totalTime % 60}`;

    const currentElement = document.getElementById('time-current');
    currentElement!.innerText = '0:00'
  }

  playWaveform() {
    this.wave.play();
  }

  pauseWaveform() {
    this.wave.pause();
  }

  loadWaveMicro() {
    if (!this.waveMicro) {
      Promise.resolve(null).then(() => {
        this.waveMicro = WaveSurfer.create({
          container: '#waveform-micro',
          waveColor: 'black',
          interact: false,
          cursorWidth: 0,
          plugins: [
            MicrophonePlugin.create()
          ]
        });                

        this.waveMicro.on('deviceReady', (stream) => {
          // console.log('device ready' + stream);
        })
      })

      this.cdr.detectChanges();
    }
  }

  startMicro() {
    this.waveMicro.microphone.start();
  }

  stopMicro() {
    this.waveMicro.microphone.stop();
  }
}
