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

  constructor(private heroService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
