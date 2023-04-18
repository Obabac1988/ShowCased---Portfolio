import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  data:any;

  constructor(
    private port: ApiService,
  ) {}

  ngOnInit() {
    this.port.getPortfolio().subscribe((res) => {
       console.log(res);
    })
  }


  addCollection(){
    let data = {
      name: 'spring'
    }
    this.port.addCollection(data).subscribe((res) => {
       console.log(res);
    })
  }
}
