import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})

export class MembersPage implements OnInit {
save() {
this.membersService.add(this.item);
this.refreshData();
this.action='list';
}

cancel() {
this.action='list';
}

ngOnInit(): void {
    this.refreshData();
  }

  membersService=inject(MembersService)
  data:MembersItem[]=[];
  action:string='list';

  item:MembersItem={
    id:0,
    fristname:'',
    lastname:'',
    nationalcode:'',
    phonenumber:'',
  };

  refreshData(){
    this.data=this.membersService.list();
  }

  add() {
    this.item={
    id:0,
    fristname:'',
    lastname:'',
    nationalcode:'',
    phonenumber:'',
    }
    this.action='add';
}
}

export interface MembersItem {
  id:number;
  fristname:string;
  lastname:string;
  nationalcode:string;
  phonenumber:string;
}