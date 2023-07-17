import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertImage'
})
export class ConvertimagePipe implements PipeTransform {

  transform(imagePath: string, ...args: unknown[]): unknown {
    if(imagePath !== null){
      const image = imagePath.match(/media\/screenshots/) 
      ? imagePath.replace("/media/screenshots", `/media/resize/1280/-/screenshots`)
      : imagePath.replace("/media/games", `/media/resize/1280/-/games`)
      return image;
  }else{
      return imagePath;
  }
  }

}
