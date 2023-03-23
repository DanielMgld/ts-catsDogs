import { Animal } from "./animals.interface";
import { DogToys } from "../enums/dog-toys.enum";
import { Species } from "../enums/species.enum";

export interface Dog extends Animal {
    species: Species.DOG;
    toys?: DogToys[];
}