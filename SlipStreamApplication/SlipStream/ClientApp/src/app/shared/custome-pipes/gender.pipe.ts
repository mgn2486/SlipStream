import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gender' })
export class GenderPipe implements PipeTransform{
  transform(genderNumber: number): string {
    let personGender = '';
    switch(genderNumber) {

      case 1:
        personGender = 'Male';
         break;

      case 2:
        personGender = 'Female';
         break;

      default:
        personGender = 'Not Recognized'
         break;

  };

  return personGender;
  }
}
