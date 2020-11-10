import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaipavanComponent } from './saipavan.component';

describe('SaipavanComponent', () => {
  let component: SaipavanComponent;
  let fixture: ComponentFixture<SaipavanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaipavanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaipavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
