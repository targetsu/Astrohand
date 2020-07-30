import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroDashboardComponent } from './astro-dashboard.component';

describe('AstroDashboardComponent', () => {
  let component: AstroDashboardComponent;
  let fixture: ComponentFixture<AstroDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
