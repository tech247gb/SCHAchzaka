import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipulComponent } from './tipul.component';

describe('TipulComponent', () => {
  let component: TipulComponent;
  let fixture: ComponentFixture<TipulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
