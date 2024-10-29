 abstract class Animal{


    noOfNose:number = 1;


    abstract  noOfEyes:number;
    abstract  noOfLegs:number;
    abstract  noOfTails:number;


    abstract foodBehaviour():void;


    rnningSpeed = ()=>{
        console.log("Wild Animals runs much faster.")
    }

    constructor(){
        console.log("Inside Animal Constructor");


       
    }

}


export default Animal;