import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AravindComponent } from './aravind.component';

describe('AravindComponent', () => {
  let component: AravindComponent;
  let fixture: ComponentFixture<AravindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AravindComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AravindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
