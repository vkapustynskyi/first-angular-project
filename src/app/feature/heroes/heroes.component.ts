import {Component, OnInit} from '@angular/core';
import {IHero} from "../../shared/heroes/interface/IHero";
import {HeroService} from "../../shared/heroes/service/hero.service";
import {MessageService} from "../../shared/heroes/service/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: IHero[] = [];
  selectedHero?: IHero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes component: selected hero with id=${hero.id}`);
  }

  private getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
