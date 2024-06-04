import { Pipe, PipeTransform } from '@angular/core';
const CHANGE_RATE = 69709;
@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd ? amount * CHANGE_RATE : amount / CHANGE_RATE;
  }

}
