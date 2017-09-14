import { MembersService } from './../members.service';
import { Member } from './../member';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {
  @Input() members: Member[];
  member: Member = new Member();
  private isRequesting;

  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.addBlackout();
  }

  addBlackout() {
      this.member.id = null;

      this.isRequesting = true;
      this.membersService
          .setMembers(this.member)
          .subscribe(
              member => {
                  this.addDataSource(member, this.members);
              },
              error => this.handleError(error)
          );
  }

  addDataSource(member: any, members: Member[]) {
      this.membersService.addDataSource(member, members);
  }

  handleError(error: any): void {
    this.isRequesting = false;
    console.log(error);
  }

}
