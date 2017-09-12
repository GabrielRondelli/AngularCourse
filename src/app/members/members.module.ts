import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MembersComponent, InfoComponent],
  exports: [
    MembersComponent
  ]
})
export class MembersModule { }
