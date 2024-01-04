import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditInfo } from './editInfo';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule, FormsModule,  RouterLink, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  public loginName:string='';
  public passwordName:string='';
  public emailName:string='';
  public userInfo:any[]=[];
  public isEdit:boolean=false;
  public userIndex!:number;
  public isDisabled:boolean=false;
 addUser(){
  const userData={
    login:this.loginName,
    password:this.passwordName,
    email:this.emailName
  
  };
  if((this.passwordName && this.loginName && this.emailName) ){
    this.userInfo.push(userData);
    this.passwordName='';
    this.loginName='';
    this.emailName='';
    
  }
  
}

deleteUser(i:number):void{
this.userInfo.splice(i, 1);
}
editUser(i:number):void{
  this.loginName=this.userInfo[i].login;
  this.emailName=this.userInfo[i].email;
  this.passwordName=this.userInfo[i].password;
 this.userIndex=i;
 this.isEdit=true; 
 
}

saveEditUser():void{
const updateInfo=new EditInfo(this.loginName, this.passwordName,this.emailName);
this.userInfo[this.userIndex]=updateInfo;
this.passwordName='';
this.loginName='';
this.emailName='';
this.isEdit=false;

}


}


