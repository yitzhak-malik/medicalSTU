import { Component, OnInit } from '@angular/core';
import { HttpServicService } from 'src/app/services/http-servic.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  academics:object[]
  academic:String
  constructor(private http:HttpServicService) {
  }
  
  ngOnInit(): void {
    this.http.httpGet<any>('/api/supervisor/getAllAcademics').subscribe((academics)=>{
      this.academics=academics;
    
    })

  }

}
