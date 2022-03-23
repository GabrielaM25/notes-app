import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxValue'
})
export class MaxValuePipe implements PipeTransform {

  transform(value: number, startRange: number, endRange: number): string {
    if(value > startRange && value<endRange){
      return 'Your value is in range';
    }else {
    return 'Your value out of range ';
      }
  }

}
