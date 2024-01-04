import { Component } from '@angular/core';
import { MainComponentComponent } from '../userList/main-component/main-component.component';
import { TaskListParentComponent } from '../taskList/task-list-parent/task-list-parent.component';
import { CenzorComponent } from '../cenzor/cenzor/cenzor.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [ MainComponentComponent, TaskListParentComponent, CenzorComponent,  FormsModule, RouterLink, RouterLinkActive, RouterOutlet, RouterModule  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent {

}
