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
  if(this.action=='add'){
    this.membersService.add(this.item);
  }
  else if(this.action=='edit'){
    this.membersService.update(this.item);
  }
  else if(this.action=='remove'){
    this.membersService.remove(this.item)
  }
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
    id:undefined,
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
    id:undefined,
    fristname:'',
    lastname:'',
    nationalcode:'',
    phonenumber:'',
    }
    this.action='add';
}

edit(member:MembersItem){
  this.item={...member};
  this.action='edit';
}

remove(member:MembersItem){
  this.item={...member};
  this.action='remove';
}

}

export interface MembersItem {
  id:number | undefined;
  fristname:string;
  lastname:string;
  nationalcode:string;
  phonenumber:string;
}