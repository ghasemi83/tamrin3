import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { first } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../../shared/base/base-thing';
import { BaseCRUDPage } from '../../../shared/base/base-page';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})

export class MembersPage extends BaseCRUDPage<MembersItem> implements OnInit {
  override dataService=inject(MembersService)
  ngOnInit(): void {
    this.refreshData();
  }

}

export interface MembersItem extends Thing{
  fristname:string;
  lastname:string;
  nationalcode:string;
  phonenumber:string;
}