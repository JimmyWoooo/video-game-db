import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faStar as solidStar, faStarHalfStroke, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar} from '@fortawesome/free-regular-svg-icons';
import { faWindows, faPlaystation, faXbox, faApple, faAndroid, faLinux, faChrome } from '@fortawesome/free-brands-svg-icons';

import { HttpService } from '../../services/http.service'
import { Game, Screenshots } from 'src/app/models/Game';
import { ModalComponent } from '../modal/modal.component';
import { GameDetail } from 'src/app/models/GameDetail';
import { smallImage } from 'src/app/handlers/util';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  public games: Game[] = [];
  public isHalfStar: boolean;
  public missingStar: number[] = [];
  private gameId: number;
  private gameDetail!: GameDetail;
  private images: string[] = [];
  solidStar = solidStar;
  faWindows = faWindows;
  faPlaystation = faPlaystation;
  faXbox = faXbox;
  faApple = faApple;
  faAndroid = faAndroid;
  faLinux = faLinux;
  faChrome = faChrome;
  faDesktop = faDesktop;
  faStarHalfStroke = faStarHalfStroke;
  regularStar = regularStar;

  constructor(private httpService: HttpService, private dialogRef: MatDialog) {
    this.isHalfStar = false;
    this.gameId = -1;
   }

  ngOnInit(): void {
    this.httpService.getData().subscribe((data) =>{
      this.games = data.results
      console.log(this.games);
    })
  }

  public openDialog(id :number, bg: string, screenshots: Screenshots[]): void{
    this.images = screenshots.map(item => smallImage(item.image));
    if(id !== this.gameId){
      this.httpService.getDetails(id).subscribe((data: GameDetail) =>{
        this.gameDetail = data;

        this.dialogRef.open(ModalComponent, {
          width: '70%',
          height: '90%',
          autoFocus: false,
          data: {
            gameDetail : this.gameDetail,
            background : smallImage(bg),
            images: this.images
          }

        });

        this.gameId = id;
      })
    }
    else{
      this.dialogRef.open(ModalComponent, {
        width: '70%',
        height: '90%',
        autoFocus: false,
        data: {
          gameDetail : this.gameDetail,
          background : smallImage(bg),
          images: this.images
        }
      });
    }
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
