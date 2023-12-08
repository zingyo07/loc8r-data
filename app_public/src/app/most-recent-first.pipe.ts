import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostRecentFirst'
})
export class MostRecentFirstPipe implements PipeTransform {

  transform(reviews: any[]): any[] {
    if (reviews && reviews.length) {
      return reviews.sort(this.compare);
    }
    // return null;
    return [];
  }

  private compare(a, b) {
    const createdOnA = a.createdOn;
    const createdOnB = b.createdOn;

    let comparison = 1;
    if (createdOnA > createdOnB) {
      comparison = -1;
    }
    return comparison;
  }
}
