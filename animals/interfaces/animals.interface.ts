import { Species } from "../enums/species.enum"
import { Gender } from "../enums/gender-enum"

export interface Animal {
    id: number;
    name: string;
    age: number;
    gender: Gender;
    species: Species;
}