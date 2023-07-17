import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatname'
})
export class FormatnamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const newValue = value.replace(':', ':\u000A');
    return newValue;
  }

}
