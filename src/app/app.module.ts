import { MembersService } from './members/members.service';
import { MembersModule } from './members/members.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    MembersModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
