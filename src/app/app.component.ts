import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  constructor (private heroService: HeroService) {
  }
  getHeroes(): void {
     this.heroService.getHeroesSlowly().then((heroes) => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}