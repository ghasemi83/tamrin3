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
this.booksService.add(this.item);
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
  id:0,
  title:'',
  writer:'',
  publisher:'',
  price:0,
 };

  refreshData() {
    this.data=this.booksService.list();
  }
 add() {
  this.action='add';

}
}


export interface BookItem {
  id:number;
  title:string;
  writer:string;
  publisher:string;
  price:number;
}