import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipulimPage } from './tipulim.page';

describe('TipulimPage', () => {
  let component: TipulimPage;
  let fixture: ComponentFixture<TipulimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipulimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipulimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
