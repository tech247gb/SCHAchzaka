import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskPagePage } from './task-page.page';

describe('TaskPagePage', () => {
  let component: TaskPagePage;
  let fixture: ComponentFixture<TaskPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
