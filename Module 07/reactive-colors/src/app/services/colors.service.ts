import { Injectable } from '@angular/core';
import { ColorModel } from '../models/color.model';
import { ALLCOLORS } from '../models/all-colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }


  async search(keyword: string):Promise<ColorModel[]> {
    console.log('Starting search for ' + keyword);
    await this.delay(4000);

    if (!keyword) return [];

    keyword = keyword.toLowerCase();

    // const entries = Object.entries(ALLCOLORS);
    // const models = entries.map(
    //   ent => <ColorModel>{displayName: ent[1].toLowerCase(), code: ent[0]});

    // const filtered = models.filter(m => m.displayName.includes(keyword));

    const res = Object
          .entries(ALLCOLORS)
          .map(ent => <ColorModel>{displayName: ent[1].toLowerCase(), code: ent[0]})
          .filter(m => m.displayName.includes(keyword));

    return res;

  }
}
