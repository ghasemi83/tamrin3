import { Component, OnInit } from '@angular/core';
import { Thing } from '../../../shared/base/base-thing';
import { BookItem } from '../books-page/books-page';
import { MembersItem } from '../members-page/members-page';
import { BaseCRUDPage } from '../../../shared/base/base-page';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-borrows-page',
  imports: [FormsModule],
  templateUrl: './borrows-page.html',
  styleUrl: './borrows-page.scss',
})
export class BorrowsPage extends BaseCRUDPage<BorrowItem> implements OnInit{
  ngOnInit(): void {
    this.refreshData();
  }
  override addPrepair(): void {
    this.item={
      borrowDate:'',
      returnDate:'',
      book:'',
      member:'',
    }
  }
}

export interface BorrowItem extends Thing{
  borrowDate:string;
  returnDate?:string;
  book:string;
  member:string;
}