import { Component, Input, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interfaces/intern-model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 @Input() obj:InternModel;
 @Input() createClass:boolean
 add=true
  constructor(private table:TableService) { }

  ngOnInit(): void {
  }
  adding(){
    this.table.add(this.obj.id)
  }
  remove(){
    this.table.remove(this.obj.id)
  }

}
