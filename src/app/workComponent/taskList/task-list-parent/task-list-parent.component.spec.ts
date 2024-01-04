import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListParentComponent } from './task-list-parent.component';

describe('TaskListParentComponent', () => {
  let component: TaskListParentComponent;
  let fixture: ComponentFixture<TaskListParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
