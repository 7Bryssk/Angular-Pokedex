import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarNumero'
})
export class FormatarNumeroPipe implements PipeTransform {

  transform(value: number): string {
    return ('000' + value).slice(-3);
  }

}
