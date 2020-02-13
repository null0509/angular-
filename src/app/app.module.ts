import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//引入AppComponent
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { LoginComponent } from './home/login/login.component';
import { HighlightDirective } from './highlight.directive';
//引入双向绑定的模块
import { FormsModule } from '@angular/forms';
import { MsgformatPipe } from './msgformat.pipe';

//引入路由模块
import { RouterModule, Routes } from '@angular/router';

//HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//声明路由
const appRoutes: Routes = [
  { path: 'foo', component: FooComponent },
  //路由路径、组件和路由数据
  { path: 'login/:id', component: LoginComponent ,data: { title: 'login信息' }},
];


//@符号在后端中叫注解：作用就是创建指定类型对象
@NgModule({
  //声明模块资源：组件、指令、服务
  declarations: [
    AppComponent,
    FooComponent,
    LoginComponent,
    HighlightDirective,
    MsgformatPipe
  ],
  //声明App依赖的模块
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //指定应用程序的根级使别需要用的service
  providers: [],
  //把AppComponent作为项目的根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
