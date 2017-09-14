import { MembersService } from './../members.service';
import { Member } from './../member';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent implements OnInit {
  @Input() member: Member;
  @Input() members: Member[];
  private isRequesting;


  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
  }

  deleteBlackout() {
    this.isRequesting = true;

    this.membersService
        .deleteMember(this.member.id)
        .subscribe(
            member => {
                this.deleteDataSource(this.member.id, this.members);
            },
            error => this.handleError(error)
        );
  }

  deleteDataSource(memberId: number, members: Member[]) {
      this.membersService.deleteDataSource(memberId, members);
  }

  handleError(error: any): void {
    this.isRequesting = false;
    console.log(error);
  }

}
