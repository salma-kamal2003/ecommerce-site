import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
  standalone: true
})
export class CurrencyConverterPipe implements PipeTransform {

  private conversionRate: number = 0.82;

  transform(value: number | null | undefined, ...args: unknown[]): number {
    if (typeof value !== 'number' || isNaN(value)) {
      return 0;
    }
    return value * this.conversionRate;
  }
}

