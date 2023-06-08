import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeUpper',
})
export class PipeUpperPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }
}
