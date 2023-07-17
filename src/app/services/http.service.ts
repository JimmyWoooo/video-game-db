import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { gameDetailsURL, popularGamesURL } from '../handlers/API';
import { APIResponse, Game } from '../models/Game';
import { Observable } from 'rxjs';
import { GameDetail } from '../models/GameDetail';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<APIResponse<Game>>{
    return this.http.get<APIResponse<Game>>(popularGamesURL());
  }

  public getDetails(id: number): Observable<GameDetail>{
    return this.http.get<GameDetail>(gameDetailsURL(id));
  }
}
