import { Routes } from '@angular/router';
import { HomeComponent } from './homeComponent/home/home.component';
import { CenzorComponent } from './workComponent/cenzor/cenzor/cenzor.component';
import { MainComponentComponent } from './workComponent/userList/main-component/main-component.component';
import { TaskListParentComponent } from './workComponent/taskList/task-list-parent/task-list-parent.component';
import { WorksComponent } from './workComponent/works/works.component';


export const routes: Routes = [
    {path:'', component:HomeComponent },
    {path:'home', component:HomeComponent },
    {path:'works', component:WorksComponent, children:[
        {path:'cenzor', component:CenzorComponent },
        {path:'users', component:MainComponentComponent},
        {path:'tasks', component:TaskListParentComponent}  
    ]},
    {path:'cenzor', component:CenzorComponent },
    {path:'users', component:MainComponentComponent},
    {path:'tasks', component:TaskListParentComponent}

];
