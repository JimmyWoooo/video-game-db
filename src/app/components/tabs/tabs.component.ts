import { Component, Input, OnInit } from '@angular/core';
import { GameDetail } from 'src/app/models/GameDetail';
import { faWindows, faSteam, faPlaystation, faXbox, faApple, faAndroid, faLinux, faChrome, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() game!: GameDetail;
  @Input() images: string [] = [];
  public pictures : string [] = [];
  public image!: string;
  public position: number;

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
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  constructor() {
    this.position = 0;
  }

  ngOnInit(): void {
    this.pictures = [...this.images];
    this.image = this.pictures[0];
  }

  public nextImage():void{
    this.position = this.position === this.images.length - 1 ? 0 : this.position + 1;
    this.image = this.pictures[this.position];
  }

  public prevImage():void{
    this.position = this.position === 0 ? this.images.length - 1 : this.position - 1;
    this.image = this.pictures[this.position];
  }

  public selectImage(index: number):void{
    this.image = this.pictures[index];
    this.position = index;
  }
}
