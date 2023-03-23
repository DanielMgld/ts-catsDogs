import { AnimalService } from "./animals/animal.service";
import { Gender } from "./animals/enums/gender-enum";
import { Species } from "./animals/enums/species.enum";

const animalService = new AnimalService();

const serviceId = animalService.getServiceId()
console.log(serviceId);

/*
    //ID alapján
    //Mivel itt csak 1 ID egyezhet, .find

const getAnimalID = animalService.getAnimalByID(18181);
console.log(getAnimalID);
*/

/*
    //Faj alapján (kutya/macska)
    //Itt .find helyett .filter van a függvényben, hogy ne csak 1 rekordot tudjon visszaadni 

const animalSpecies = animalService.getAnimalBySpecies("dog");
console.log(animalSpecies);
*/

/*
    //Új állat hozzáadása
    //Ellenőrzésképp minden állat listázása

const addAnimal = animalService.addAnimal(44444, Species.CAT, "Betyár", 3, Gender.MALE);
console.log(animalService.getAnimalBySpecies(undefined));
*/
