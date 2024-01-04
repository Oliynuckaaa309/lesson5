
import { Component, ViewChild  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListChildComponent } from '../task-list-child/task-list-child/task-list-child.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-task-list-parent',
  standalone: true,
  imports: [TaskListChildComponent, FormsModule, RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './task-list-parent.component.html',
  styleUrl: './task-list-parent.component.css'
})
export class TaskListParentComponent {
  public countOfTasks:number=0;

  public parentData:string=''
  public taskStatus:boolean=false;
  parentItems:{nameTask:string, statusTask:boolean}[]=[];
  
  
  addInfo():void{
    if(this.parentData!=''){
      this.parentItems.push({nameTask: this.parentData, statusTask:this.taskStatus });
      this.countOfTasks++;
    }
  this.parentData='';
  
  
  }
  
  changeCounterHandle(count:number){
    this.countOfTasks=count;
  }
}
