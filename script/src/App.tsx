import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import Animal from './classes/Animal';
import Lion from './classes/Lion';
import Tiger from './classes/Tiger';

function App() {

let age:number = 25;

//let anim1 = new Animal();

let lion1 = new Lion();





let tiger = new Tiger();




  return (
    <div className="App">
      <Movie></Movie>
    </div>
  );
}

export default App;
