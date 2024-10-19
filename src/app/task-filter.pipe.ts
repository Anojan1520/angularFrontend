import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let searchData:string=args[0].toLowerCase();
    return value.filter((v:any)=>v.title.toLowerCase().includes(searchData)||v.description.toLowerCase().includes(searchData));
  
  }

}
