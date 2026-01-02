import { Component, inject, OnInit } from '@angular/core';
import { Thing } from '../../../shared/base/base-thing';
import { BookItem } from '../books-page/books-page';
import { MembersItem } from '../members-page/members-page';
import { BaseCRUDPage } from '../../../shared/base/base-page';
import { FormsModule } from '@angular/forms';
import { BaseCrudComponent, Column } from '../../../shared/base/base-crud-component/base-crud-component';
import { DecimalPipe } from '@angular/common';
import { BaseCRUDService } from '../../../shared/base/base-service';
import { BorrowsService } from './borrows-service';


@Component({
  selector: 'app-borrows-page',
  imports: [FormsModule,DecimalPipe,BaseCrudComponent],
  templateUrl: './borrows-page.html',
  styleUrl: './borrows-page.scss',
})
export class BorrowsPage extends BaseCRUDPage<BorrowItem> implements OnInit{
  override dataService=inject(BorrowsService);
  ngOnInit(): void {
    this.refreshData();
    this.item={
      borrowDate:'',
      returnDate:'',
      book:'',
      member:'',
    };
  }
  override addPrepair(): void {
    this.item={
      borrowDate:'',
      returnDate:'',
      book:'',
      member:'',
    };
  }
  
  columns:Column[]=[
    {field:'id',title:'شناسه '},
    {field:'borrowDate',title:'تاریخ امانت'},
    {field:'returnDate',title:'تاریخ بازگشت'},
    {field:'book',title:'نام کتاب'},
    {field:'member',title:'نام امانت گیرنده'},
  ]
}

export interface BorrowItem extends Thing{
  borrowDate:string;
  returnDate?:string;
  book:string;
  member:string;
}