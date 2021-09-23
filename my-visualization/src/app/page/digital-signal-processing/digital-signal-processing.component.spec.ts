import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSignalProcessingComponent } from './digital-signal-processing.component';

describe('DigitalSignalProcessingComponent', () => {
  let component: DigitalSignalProcessingComponent;
  let fixture: ComponentFixture<DigitalSignalProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalSignalProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalSignalProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
