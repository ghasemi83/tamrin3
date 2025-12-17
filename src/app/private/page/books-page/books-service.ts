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
update(book:BookItem){
  const index=this.data.findIndex(b=>b.id==book.id);
  if(index!=-1){
    this.data[index].title=book.title;
    this.data[index].writer=book.writer;
    this.data[index].publisher=book.publisher;
    this.data[index].price=book.price;
  }
}
remove(book:BookItem){
  this.data=this.data.filter(m=>m.id!=book.id);
}
}
