import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstromanageComponent } from './astromanage.component';

describe('AstromanageComponent', () => {
  let component: AstromanageComponent;
  let fixture: ComponentFixture<AstromanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstromanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstromanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
