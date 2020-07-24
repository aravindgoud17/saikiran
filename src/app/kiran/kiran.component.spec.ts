import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiranComponent } from './kiran.component';

describe('KiranComponent', () => {
  let component: KiranComponent;
  let fixture: ComponentFixture<KiranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KiranComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
