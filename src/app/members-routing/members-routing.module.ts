import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersRoutingComponent } from './members-routing.component';
import { RouterModule, Routes } from '@angular/router';

import { ListMemberComponent } from '../members/list-member/list-member.component';
import { CreateMemberComponent } from '../members/create-member/create-member.component';
import { EditMemberComponent } from '../members/edit-member/edit-member.component';
import { DeleteMemberComponent } from '../members/delete-member/delete-member.component';
import { ShowMemberComponent } from '../members/show-member/show-member.component';


const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: ListMemberComponent },
  { path: 'edit/:id', component: EditMemberComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class MembersRoutingModule { }
