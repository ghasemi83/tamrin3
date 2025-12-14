import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  private data:BookItem[]=[
    {id:1,title:'بیمناک',writer:'لورن رابرتس ',publisher:'آذرگون ',price:200000},
    {id:2,title:' یاد او',writer:'کالین هوور ',publisher:'آذرگون ',price:150000},
    {id:3,title:'دیزی دارکر ',writer:'آلیس فینی ',publisher:'آذرگون ',price:450000},
    {id:4,title:' دزیره ',writer:'آن ماری سلینکو ',publisher:'آذرگون ',price:280000},
   ];
    add(book:BookItem) {
  this.data.push(book);
}
list(){
  return[...this.data];
}
update(){

}
remove(){

}
}
