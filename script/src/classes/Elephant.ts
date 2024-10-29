import Animal from "./Animal";

class Elephant extends Animal{
    noOfEyes: number = 2;
    noOfLegs: number = 4;
    noOfTails: number =1;
    foodBehaviour(): void {
      console.log("pure Vegeterian");
    }


constructor(){
    super();
    console.log("Inside Elephant Constructor");
}
    

}