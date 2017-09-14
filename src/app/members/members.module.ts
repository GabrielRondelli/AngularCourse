import { MembersRoutingModule } from './../members-routing/members-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { ListMemberComponent } from './list-member/list-member.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { ShowMemberComponent } from './show-member/show-member.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MembersRoutingModule
  ],
  declarations: [
    MembersComponent,
    ListMemberComponent,
    CreateMemberComponent,
    EditMemberComponent,
    DeleteMemberComponent,
    ShowMemberComponent
],
  exports: [
    MembersComponent
  ]
})
export class MembersModule { }
