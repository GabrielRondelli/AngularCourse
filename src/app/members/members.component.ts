import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members = [];

  constructor() { }

  ngOnInit() {
    this.members = [
      {
        name: 'John Doe',
        status: 'Active'
      },
      {
        name: 'Doe John',
        status: 'Inactive'
      }
    ]
  }

}
