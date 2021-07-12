import { Component, Input, OnInit } from '@angular/core';
import { InternModel } from 'src/app/interfaces/intern-model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 
 @Input() interns:InternModel[];
 @Input() createClass:boolean
 add=true
  constructor(private table:TableService) { 
    console.log('this table');
    
  }

  ngOnInit(): void {
  }

  adding(id){
    this.table.add(id)
  }
  remove(id){
    this.table.remove(id)
  }
}
