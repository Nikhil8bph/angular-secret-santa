
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ModifyregisteredComponent } from './modifyregistered/modifyregistered.component';
import { ViewregisteredComponent } from './viewregistered/viewregistered.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:ViewregisteredComponent},
  {path:"userlist", component:ViewregisteredComponent},
  {path:"adduser", component:RegisteruserComponent},
  {path:"edituser", component:ModifyregisteredComponent},
  {path:"edituser/:id", component:ModifyregisteredComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
