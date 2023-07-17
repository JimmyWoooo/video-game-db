import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faStar as solidStar, faStarHalfStroke, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import { faWindows, faSteam, faPlaystation, faXbox, faApple, faAndroid, faLinux, faChrome, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { GameDetail } from 'src/app/models/GameDetail';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public game!: GameDetail;
  public bg!: string;
  public images!: string[];
  public isHalfStar: boolean;
  public missingStar: number[] = [];

  faTimes = faTimesCircle;
  solidStar = solidStar;
  faWindows = faWindows;
  faSteam = faSteam;
  faPlaystation = faPlaystation;
  faXbox = faXbox;
  faApple = faApple;
  faAndroid = faAndroid;
  faLinux = faLinux;
  faChrome = faChrome;
  faDesktop = faDesktop;
  faAppStore = faAppStore;
  faGooglePlay = faGooglePlay;
  faStarHalfStroke = faStarHalfStroke;
  regularStar = regularStar;

  constructor(@Inject(MAT_DIALOG_DATA) private data:any) { 
    this.isHalfStar = false;
  }

  ngOnInit(): void {
    this.game = this.data.gameDetail;
    this.bg = this.data.background;
    this.images = this.data.images;
    console.log(this.game)
  }

  public getRating(rating: number): number[]{
    const roundedRating = Math.round(rating);
    const flooredRating = Math.floor(rating);
    if(rating % 1 > 0.5){
      this.isHalfStar = true;
      this.missingStar = Array(4 - flooredRating).fill(0)
      return Array(flooredRating).fill(0);
    }
    else{
      this.isHalfStar = false;
      this.missingStar = Array(5 - roundedRating).fill(0)
      return Array(roundedRating).fill(0);
    }
  }
}
