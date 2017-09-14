import { MembersRoutingModule } from './members-routing/members-routing.module';
import { MembersService } from './members/members.service';
import { HttpModule } from '@angular/http';
import { MembersModule } from './members/members.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import './rx-js.operators';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MembersModule,
    MembersRoutingModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
