import { Component } from '@angular/core';
import { CenzorComponent } from '../../workComponent/cenzor/cenzor/cenzor.component';
import { TaskListParentComponent } from '../../workComponent/taskList/task-list-parent/task-list-parent.component';
import { MainComponentComponent } from '../../workComponent/userList/main-component/main-component.component';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CenzorComponent, TaskListParentComponent, MainComponentComponent,  RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
