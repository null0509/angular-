import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.less']
})
export class FooComponent implements OnInit {
  message = "ooo";
  seen = true;
  gender = 1;
  hobby = 2;
  currentTime = new Date();
  constructor() { }

  arr = [
    {name:'zhangsan',age:1},
    {name:'lisi',age:10},
    {name:'wangwu',age:9}
  ]
  ngOnInit(): void {
  }

  onSave = () => {
    console.log("保存")
  }

  onSave2 = (event) => {
    console.log(event.target)
  }

  onSave3 = (event, msg) => {
    console.log(event.target)
    console.log(msg)
  }
}
