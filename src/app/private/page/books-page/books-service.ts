import { Injectable } from '@angular/core';
import { BookItem } from './books-page';
import { BaseCRUDService } from '../../../shared/base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseCRUDService<BookItem>{
  
  override data:BookItem[]=[
    {id:1,title:'بیمناک',writer:'لورن رابرتس ',publisher:'آذرگون ',price:200000},
    {id:2,title:' یاد او',writer:'کالین هوور ',publisher:'آذرگون ',price:150000},
    {id:3,title:'دیزی دارکر ',writer:'آلیس فینی ',publisher:'آذرگون ',price:450000},
    {id:4,title:' دزیره ',writer:'آن ماری سلینکو ',publisher:'آذرگون ',price:280000},
   ];
   override edit(destination: BookItem, source: BookItem): void {
     destination.price=source.price;
     destination.publisher=source.publisher;
     destination.title=source.title;
     destination.writer=source.writer;
   }
}

