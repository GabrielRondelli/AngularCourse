import { MembersService } from './../members.service';
import { Member } from './../member';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  private isRequesting;
  private members: Member[];
  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
      this.isRequesting = true;

      this.membersService.getMembers()
          .subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
      );
  }

  onDeleted(memberId) {
    this.membersService.deleteMember(memberId);
  }

  handleResponse(members: any): void {
      this.members = members.data;
      this.isRequesting = false;
  }

  handleError(error: any): void {
      this.isRequesting = false;
      console.log(error);
  }

}
