import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-books-page',
  imports: [FormsModule,DecimalPipe],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})

export class BooksPage implements OnInit {
save() {
  if(this.action=='add'){
  this.booksService.add(this.item);
  }
  else if(this.action=='edit'){
    this.booksService.update(this.item);
  }
  this.refreshData();
  this.action='list';
}

cancel() {
this.action='list';
}

 ngOnInit(): void {
  this.refreshData();
  }

  booksService=inject(BooksService);
 data:BookItem[]=[];
 action:string='list';

 item:BookItem={
  id:undefined,
  title:'',
  writer:'',
  publisher:'',
  price:undefined,
 };

  refreshData() {
    this.data=this.booksService.list();
  }
  
 add() {
  this.item={
    id:undefined,
    title:'',
    writer:'',
    publisher:'',
    price:undefined,
  };
  this.action='add';
}

edit(book:BookItem){
  this.item={...book};
  this.action='edit';
}
}

export interface BookItem {
  id: number | undefined;
  title:string;
  writer:string;
  publisher:string;
  price:number |undefined;
}