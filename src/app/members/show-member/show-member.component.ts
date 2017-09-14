import { MembersService } from './../members.service';
import { Component, OnInit, Input } from '@angular/core';
import { Member } from './../member';


@Component({
  selector: 'show-member',
  templateUrl: './show-member.component.html',
  styleUrls: ['./show-member.component.css']
})
export class ShowMemberComponent implements OnInit {
  @Input() member: Member;
  private isRequesting;
  

  constructor(
    private membersService: MembersService
  ) { }

  ngOnInit() {
  }

}
