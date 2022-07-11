import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastTasksComponent } from './last-tasks.component';

describe('LastTasksComponent', () => {
  let component: LastTasksComponent;
  let fixture: ComponentFixture<LastTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTasksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
