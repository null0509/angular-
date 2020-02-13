import { Component } from '@angular/core';


@Component({
  selector: 'app-root',  //规定页面中使用的标签名字
  templateUrl: './app.component.html',   //指定app.component使用哪个页面模板
  styleUrls: ['./app.component.less']   //指定app.component使用哪个样式文件
})

//导出AppComponent组件
export class AppComponent {
  //声明变量
  title = '嘻嘻嘻嘻嘻';
  count = 0;



  //声明一个方法
  increment = ()=>{
    this.count ++;
  }
}
