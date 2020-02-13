import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgformat'
})
export class MsgformatPipe implements PipeTransform {
  //value就是要过滤的内容
  transform(value: string, ...args: unknown[]): unknown {
    return value.split("").reverse().join("");
  }
}
