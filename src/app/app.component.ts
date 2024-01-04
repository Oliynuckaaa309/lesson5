import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { CenzorComponent } from './workComponent/cenzor/cenzor/cenzor.component';
import { MainComponentComponent } from './workComponent/userList/main-component/main-component.component';
import { TaskListParentComponent } from './workComponent/taskList/task-list-parent/task-list-parent.component';
import { HeaderComponent } from './headerComponent/header/header.component';
import { HomeComponent } from './homeComponent/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RouterOutlet, RouterLink, RouterLinkActive,CommonModule, RouterOutlet, CenzorComponent,  MainComponentComponent,TaskListParentComponent, HeaderComponent,HomeComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson05';
}
