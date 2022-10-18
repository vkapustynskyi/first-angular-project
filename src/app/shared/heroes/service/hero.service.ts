import {Injectable} from '@angular/core';
import {IHero} from "../interface/IHero";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: IHero[] = [
    {id: 1, name: 'Windstorm'},
    {id: 2, name: 'Shark'},
    {id: 3, name: 'Lion'},
    {id: 4, name: 'Tornado'},
    {id: 5, name: 'Dark'}
  ]

  constructor(private messageService: MessageService) {
  }

  public getHero(id: number): Observable<IHero> {
    const hero = this.heroes.find(hero => hero.id === id)!;
    return of(hero);
  }

  public getHeroes(): Observable<IHero[]> {
    const heroes = of(this.heroes);
    this.messageService.add("Heroes fetched successfully");
    return heroes;
  }
}
