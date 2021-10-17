import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss']
})
export class LaunchpadComponent implements OnInit {

  constructor() { }
  columnNumber = 6;
  lengthButtons = 36;
  lstButtons = Array(this.lengthButtons).fill(null).map((item, index) => index)
  ngOnInit(): void {
  }

  clickLaunchpad(index: number) {
    const row = Math.floor(index / 8);
    const col = index % this.columnNumber;
    console.log(`button row ${row}, col ${col} has been clicked`);
  }

  playback() {
    // handle onclick play back button
  }

  saveToDB() {
    // handle onclick DB button
  }

  makeSong() {
    // handle onclick makeSong button
  }

  record() {
    // handle onclick record button
  }


}
