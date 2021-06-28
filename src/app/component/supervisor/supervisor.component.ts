import { Component, OnInit } from '@angular/core';
import { HttpServicService } from 'src/app/services/http-servic.service';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {
  academics:object
  constructor(private http:HttpServicService) {
    this.http.httpGet('/api/supervisor/getAllAcademics').subscribe((s)=>{console.log(s);this.academics=s}
    )
   }

  ngOnInit(): void {
  }

}
