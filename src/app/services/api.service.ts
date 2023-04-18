import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  portfolio: any
  constructor(private http: HttpClient) { }

  getPortfolio() {
    return this.http.get('https://portfolio-6f40b-default-rtdb.firebaseio.com/season.json')
      .pipe(
        map((response: any) => {
          console.log(response);
          var portfolio = []
          for (const key in response) {
            if (response.hasOwnProperty) {
              portfolio.push({ ...response[key], id: key })
            }
          }
          this.portfolio = portfolio
          console.log('port',this.portfolio);
        })
      )
  }

  addCollection(data:any){
    return this.http.post('https://portfolio-6f40b-default-rtdb.firebaseio.com/season.json', data)
  }

  

} 
