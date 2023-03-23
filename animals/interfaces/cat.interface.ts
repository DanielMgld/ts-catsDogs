import { Animal } from "./animals.interface";
import { Species } from "../enums/species.enum";
import { CatToys } from "../enums/cat-toys.enum";

export interface Cat extends Animal {
    species: Species.CAT;
    toys?: CatToys[];
}