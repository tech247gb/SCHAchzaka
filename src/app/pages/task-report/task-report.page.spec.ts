import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskReportPage } from './task-report.page';

describe('TaskReportPage', () => {
  let component: TaskReportPage;
  let fixture: ComponentFixture<TaskReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
