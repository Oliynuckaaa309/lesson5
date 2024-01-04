import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListChildComponent } from './task-list-child.component';

describe('TaskListChildComponent', () => {
  let component: TaskListChildComponent;
  let fixture: ComponentFixture<TaskListChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
