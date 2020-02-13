import { Component, OnInit } from '@angular/core';
//引入ActivatedRoute模块
import { ActivatedRoute } from '@angular/router';
//引入Location模块
import { Location } from '@angular/common';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  message = "消息";
  name = "zhangsan";
  heroImageUrl = "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg";
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  isSpecial = true;
  currentHero = "Tornado";

  isButtonDisabled = ''

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get("id"));
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.data)

    console.log(this.location)
    console.log(this.location.path())

    
    this.http.get('/api/homead').subscribe(data => {
      console.log(data)
    },
    
    err => {
      console.log('Something went wrong!');	
    });
  }

}
