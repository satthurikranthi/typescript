import Animal from "./Animal";

class Lion extends Animal{
    noOfTails: number = 1;
    noOfEyes: number = 2;
    noOfLegs: number = 4;
    foodBehaviour(): void {
       console.log("Lion eat nonveg.")
    }
    constructor(){
        super();
        console.log("Inside lion constructor");
    }
}



export default Lion;