import { Component } from '@angular/core';

@Component({
  selector: 'app-members-page',
  imports: [],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage {

  data:MembersItem[]=[
    {id:1,fristname:'مهشید ',lastname:'قاسمی ',nationalcode:'3865551444',phonenumber:'09387681575'},
    {id:1,fristname:'تر',lastname:'بابایی ',nationalcode:'3865521484',phonenumber:'09382027575'},
    {id:1,fristname:'مریم ',lastname:'قاسمی ',nationalcode:'3869552474',phonenumber:'09387761575'},
    {id:1,fristname:'آرسام ',lastname:'بابایی ',nationalcode:'3879991444',phonenumber:'09361227575'},
    {id:1,fristname:'مانلی ',lastname:'رفعت ',nationalcode:'3864551334',phonenumber:'09387477875'},
  ]
  add() {

}
}

export interface MembersItem {
  id:number;
  fristname:string;
  lastname:string;
  nationalcode:string;
  phonenumber:string
}