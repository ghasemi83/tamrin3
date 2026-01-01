import { Injectable } from '@angular/core';
import { BaseCRUDPage } from '../../../shared/base/base-page';
import { BaseCRUDService } from '../../../shared/base/base-service';
import { BorrowItem } from './borrows-page';

@Injectable({
  providedIn: 'root',
})
export class BorrowsService extends BaseCRUDService<BorrowItem>{
  
  override data:BorrowItem[]=[
    
      {id:1,borrowDate:'3/8/1404',returnDate:'26/8/1404',book:'دزیره',member:'مریم قاسمی'},
      {id:1,borrowDate:'7/9/1404',returnDate:'20/9/1404',book:'بیمناک',member:'آرسام بابایی'},
      {id:1,borrowDate:'1/10/1404',returnDate:'15/10/1404',book:'دیزی دارکر',member:'مانلی رفعت'},
      {id:1,borrowDate:'28/8/1404',returnDate:'15/10/1404',book:'یاد او ',member:'مهشید قاسمی'},
  ]
  override edit(destination: BorrowItem, source: BorrowItem): void {
    destination.borrowDate=source.borrowDate;
    destination.returnDate=source.returnDate;
    destination.book=source.book;
    destination.member=source.member;
  }
}