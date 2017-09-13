import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { InfoComponent } from './info/info.component';
import { CreateMemberComponent } from './create-member/create-member.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MembersComponent, InfoComponent, CreateMemberComponent],
  exports: [
    MembersComponent
  ]
})
export class MembersModule { }
