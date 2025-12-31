import { Component, OnInit } from '@angular/core';
import { Thing } from '../../../shared/base/base-thing';
import { BookItem } from '../books-page/books-page';
import { MembersItem } from '../members-page/members-page';
import { BaseCRUDPage } from '../../../shared/base/base-page';


@Component({
  selector: 'app-borrows-page',
  imports: [],
  templateUrl: './borrows-page.html',
  styleUrl: './borrows-page.scss',
})
export class BorrowsPage extends BaseCRUDPage<BorrowItem> implements OnInit{
  ngOnInit(): void {
    this.refreshData();
  }
}

export interface BorrowItem extends Thing{
  borrowDate:Date;
  returnDate?:Date;
  book:BookItem;
  member:MembersItem;
}