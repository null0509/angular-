import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//引入AppModule模块
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//指定AppModule模块为项目的根模块
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
