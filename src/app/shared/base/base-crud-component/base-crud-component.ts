import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'my-crud',
  imports: [],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
 @Input() myaction:string='list';
 @Output() onAdd=new EventEmitter;
 @Output() onCancel=new EventEmitter;
 @Input() columns:Column[]=[];
 @Input() data:any[]=[];
 @Output() onEdit=new EventEmitter<any>;
 @Output() onRemove=new EventEmitter<any>;
}
export interface Column {
  title:string;
  field:string;
}