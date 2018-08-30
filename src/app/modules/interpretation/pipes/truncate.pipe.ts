import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, args: number): string {


    const limit = args > 0 ? args : value.length;
    const trail = value.length > limit ? '...' : '';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
