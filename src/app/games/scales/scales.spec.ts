import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scales } from './scales';

describe('Scales', () => {
  let component: Scales;
  let fixture: ComponentFixture<Scales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
