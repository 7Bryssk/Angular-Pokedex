import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    nameFilter = '';
    selectedPkm = null;

    get pokemonList() {
      return this.pokeapi.pokemonList.filter(pokemon => {
        return pokemon.name.toLocaleLowerCase().indexOf(this.nameFilter.toLocaleLowerCase()) !== -1;
      })
    }


    get PkmSprite() {
        const number = ('000' + this.selectedPkm.number).slice(-3);

        console.log(this.selectedPkm);
        console.log(number);
        return `//serebii.net/sunmoon/pokemon/${number}.png`;
    }

    constructor(
        private pokeapi: PokeapiService
    ) { }

    ngOnInit() {
        this.pokeapi.listAll();
    }

    selectPokemon(pokemon) {
        this.selectedPkm = pokemon;
    }

}
