import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
// import {HEROES} from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES
  // selectedHero: Hero
  heroes: Hero[];
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.getHeroes()
  }
  // onSelect(hero: Hero): void { //takes in arg of type Hero and rets None
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroService: selected hero id=${hero.id}`)
  // }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes) //waits for Observable to emit arr
  }


}
