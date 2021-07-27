// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Numbers } from './second-form/second-form.component';

@Pipe({
  name: 'searchFilter'
})
export class CustomPipe implements PipeTransform {
    transform(numbers: Numbers[], search: string = ""): Numbers[] {
        if(!search.trim()){
          return numbers
        }
        return numbers.filter( numbers =>{
          return numbers.number.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
        })
      }
}