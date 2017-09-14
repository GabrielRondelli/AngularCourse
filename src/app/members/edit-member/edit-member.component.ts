import { MembersService } from './../members.service';
import { Component, OnInit, Input } from '@angular/core';
import { Member } from './../member';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  member: any;
  private isRequesting;


  constructor(
    private membersService: MembersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMember();
  }

  updateDataSource(member: Member, members: Member[]) {
      this.membersService.updateDataSource(member, members);
  }

  handleError(error: any): void {
    this.isRequesting = false;
    console.log(error);
  }

  getMember() {
    this.isRequesting = true;
    this.route.paramMap.switchMap((params: ParamMap) => this.membersService.getMember(+params.get('id')))
          .subscribe(
                data => this.handleResponse(data),
                error => this.handleError(error)
          );
  }

  handleResponse(member: any): void {
    this.member = member.data;
    this.isRequesting = false;
}

  goBack(): void {
    this.location.back();
  }
}
