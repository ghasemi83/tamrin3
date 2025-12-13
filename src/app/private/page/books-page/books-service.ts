import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  
  private data:BookItem[]=[
    {id:1,title:'برنامه نویسی ',writer:'خودم ',publisher:'خودش ',price:8000},
    {id:2,title:' داده کاوی  ',writer:'خودم ',publisher:'خودش ',price:10000},
    {id:3,title:' پایگاه داده ',writer:'خودم ',publisher:'خودش ',price:45000},
    {id:4,title:' ساختمان داده ',writer:'خودم ',publisher:'خودش ',price:280000},
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
