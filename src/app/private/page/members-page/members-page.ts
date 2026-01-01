import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../shared/base/base-thing';
import { BaseCRUDPage } from '../../../shared/base/base-page';
import { BaseCrudComponent, Column } from "../../../shared/base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})

export class MembersPage extends BaseCRUDPage<MembersItem> implements OnInit {
  override dataService=inject(MembersService)
  ngOnInit(): void {
    this.refreshData();
    this.item={
      fristname:'',
      lastname:'',
      nationalcode:'',
      phonenumber:'',
    }
  }
  override addPrepair(): void {
    this.item={
      fristname:'',
      lastname:'',
      nationalcode:'',
      phonenumber:'',
    }
  }
  
    columns:Column[]=[
      {field:'id',title:'شناسه '},
      {field:'fristname',title:'نام'},
      {field:'lastname',title:'نام خانوادگی'},
      {field:'nationalcode',title:'کد ملی'},
      {field:'phonenumber',title:'شماره تلفن'},
    ]
}

export interface MembersItem extends Thing{
  fristname:string;
  lastname:string;
  nationalcode:string;
  phonenumber:string;
}