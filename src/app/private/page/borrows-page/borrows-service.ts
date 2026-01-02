import { Injectable } from '@angular/core';
import { BaseCRUDPage } from '../../../shared/base/base-page';
import { BaseCRUDService } from '../../../shared/base/base-service';
import { BorrowItem } from './borrows-page';

@Injectable({
  providedIn: 'root',
})
export class BorrowsService extends BaseCRUDService<BorrowItem>{
  
  override data:BorrowItem[]=[
    
      {id:1,borrowDate:'1404/8/3',returnDate:'1404/8/26',book:'دزیره',member:'مریم قاسمی'},
      {id:1,borrowDate:'1404/9/7',returnDate:'1404/9/20',book:'بیمناک',member:'آرسام بابایی'},
      {id:1,borrowDate:'1404/10/1',returnDate:'1404/10/15',book:'دیزی دارکر',member:'مانلی رفعت'},
      {id:1,borrowDate:'1404/8/28',returnDate:'1404/10/15',book:'یاد او ',member:'مهشید قاسمی'},
  ]
  override edit(destination: BorrowItem, source: BorrowItem): void {
    destination.borrowDate=source.borrowDate;
    destination.returnDate=source.returnDate;
    destination.book=source.book;
    destination.member=source.member;
  }
}