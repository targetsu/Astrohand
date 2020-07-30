import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstropaymentComponent } from './astropayment.component';

describe('AstropaymentComponent', () => {
  let component: AstropaymentComponent;
  let fixture: ComponentFixture<AstropaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstropaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstropaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
