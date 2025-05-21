import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: unknown): string {
    const phone = value?.toString().replace(/\D/g, '');

    if (!phone || phone.length < 10) {
      return value as string; // return raw value if invalid
    }

    const area = phone.slice(0, 3);
    const prefix = phone.slice(3, 6);
    const line = phone.slice(6, 10);

    return `(${area}) ${prefix}-${line}`;
  }

}
