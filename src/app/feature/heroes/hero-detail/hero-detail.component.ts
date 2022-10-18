import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../../../shared/heroes/interface/IHero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: IHero;

  constructor() {
  }

  ngOnInit(): void {
  }

}
