import { Injectable } from '@angular/core';
import { MembersItem } from './members-page';
import { BaseCRUDService } from '../../../shared/base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseCRUDService<MembersItem> {

  override data:MembersItem[]=[
      {id:1,fristname:'مهشید ',lastname:'قاسمی ',nationalcode:'3865551444',phonenumber:'09387681575'},
      {id:2,fristname:'ترانه',lastname:'بابایی ',nationalcode:'3865521484',phonenumber:'09382027575'},
      {id:3,fristname:'مریم ',lastname:'قاسمی ',nationalcode:'3869552474',phonenumber:'09387761575'},
      {id:4,fristname:'آرسام ',lastname:'بابایی ',nationalcode:'3879991444',phonenumber:'09361227575'},
      {id:5,fristname:'مانلی ',lastname:'رفعت ',nationalcode:'3864551334',phonenumber:'09387477875'},
    ]
    override edit(destination: MembersItem, source: MembersItem): void {
      destination.fristname=source.fristname;
      destination.lastname=source.lastname;
      destination.nationalcode=source.nationalcode;
      destination.phonenumber=source.phonenumber;
    }
 
}
