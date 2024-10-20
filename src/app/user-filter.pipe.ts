import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    let searchData:string=args[0].toLowerCase();
    return value.filter((a:any)=>a.name.toLowerCase().includes(searchData) || a.email.toLowerCase().includes(searchData));
  }

}
