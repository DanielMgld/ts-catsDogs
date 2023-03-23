import { OnInit } from "./core/on-init.interface";
import { Service } from "./core/service";
import { Gender } from "./enums/gender-enum";
import { Species } from "./enums/species.enum";
import { Animal } from "./interfaces/animals.interface";
import { Dog } from "./interfaces/dog.interface";
import { Cat } from "./interfaces/cat.interface";

const mDoggoOne: Dog = {
    id: 18181,
    species: Species.DOG,
    name: "I. Bodri, a Kutya",
    age: 6,
    gender: Gender.MALE,
}

const fCatOne: Cat = {
    id: 12121,
    species: Species.CAT,
    name: "Cirmi",
    age: 6,
    gender: Gender.FEMALE,
}

const fDoggoOne: Dog = {
    id: 11112,
    species: Species.DOG,
    name: "Ellie",
    age: 2,
    gender: Gender.FEMALE,
}

let animal: Animal[] = [fDoggoOne, mDoggoOne, fCatOne];

export class AnimalService extends Service implements OnInit {
    public onInit(): void {
    }

    public getAnimalByID(id: number): Animal | undefined {
        return animal.find((item) => item.id === id);
      }
  
    public getAnimalBySpecies(species: string): Animal[] {
        return animal.filter((item) => item.species === species);
      }

    public addAnimal (id: number, species: Species, name: string, age: number, gender: Gender,) {
        let newAnimal: Animal = {id, species, name, age, gender};
        animal.push(newAnimal);
    }

    public listAll(species: string | undefined = undefined): Animal[] {
        if (species === undefined){
            return animal;
        } else
        return animal.filter((item) => item.species === species);
    }
}