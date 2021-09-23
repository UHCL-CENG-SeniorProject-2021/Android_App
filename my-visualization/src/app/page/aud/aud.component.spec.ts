import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudComponent } from './aud.component';

describe('AudComponent', () => {
  let component: AudComponent;
  let fixture: ComponentFixture<AudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
