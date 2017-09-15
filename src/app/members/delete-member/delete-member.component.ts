import { MembersService } from './../members.service';
import { Member } from './../member';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent implements OnInit {
  @Input() member: Member;
  @Input() members: Member[];
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  private isRequesting;


  constructor(
    private membersService: MembersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  deleteMember(memberId: number): void {
    this.membersService.deleteMember(memberId)
      .subscribe(
          error => this.handleError(error)
      );
  }

  deleteDataSource(memberId: number, members: Member[]): void {
      this.membersService.deleteDataSource(memberId, members);
  }

  handleError(error: any): void {
    this.isRequesting = false;
    console.log(error);
  }

  onDeleted() {
    this.onDelete.emit();
  }

}
