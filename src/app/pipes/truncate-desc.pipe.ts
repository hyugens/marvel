import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateDesc'
})
export class TruncateDescPipe implements PipeTransform {

  transform(value: string, maxCharacters): string {
    let aux = value.slice(0, maxCharacters);
    if (value.length > maxCharacters) { aux = aux + ' ...'; }
    if (value.length === 0) {
      aux = 'No description available';
    }
    return aux;
  }

}
