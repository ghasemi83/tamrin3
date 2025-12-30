import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { Thing } from '../../../shared/base/base-thing';
import { BaseCRUDPage } from '../../../shared/base/base-page';


@Component({
  selector: 'app-books-page',
  imports: [FormsModule,DecimalPipe],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})

export class BooksPage extends BaseCRUDPage<BookItem> implements OnInit {
   override dataService=inject(BooksService);
  ngOnInit(): void {
  this.refreshData();
  }

}

export interface BookItem extends Thing {
  title:string;
  writer:string;
  publisher:string;
  price:number |undefined;
}