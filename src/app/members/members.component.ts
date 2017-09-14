import { MembersService } from './members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from './member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
    // this.getMembers();
  }

  onSubmit(newMember) {
    this.members.push(newMember);
  }

  // getMembers(): void {
  //   this.members = this.membersService.getMembers();
  // }

  // setMembers(newMember): void {
  //   this.membersService.setMembers(newMember);
  //   this.getMembers();
  // }

}
