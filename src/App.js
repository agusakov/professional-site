import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * To do:
 * finish up quantum computing stuff, add more to paper
 * clean up technical writing portfolio, make it look professional
 * figure out styling for headers
 */

function App() {
  return (
    <div className="App">
        <header>Alena Gusakov, Mathematician</header>
        <body>
        <p>
        Recent graduate from the University of Delaware with degrees in 
        mathematics and computer science. I like algebraic combinatorics
        and graph theory, but I'm always learning!
        
        I am interested in other topics and willing to work on any problem I like.

        <a
          className="App-link"
          href="https://github.com/agusakov"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Page (redirect link)</a>
        </p>
        <div>
        <header2>Projects</header2>
        <br/>
        <header3>Formalizing Math In Lean:</header3>
        <ul>
          <li>
            Lecture notes and exercises from MATH688 and 888: 
            Combinatorics and Graph Theory I and II at the University of Delaware,
            with the goal of eventually contributing to mathlib.
            [<a
              className="App-link"
              href="https://github.com/agusakov/graph_theory_2020"
              target="_blank"
              rel="noopener noreferrer">link</a>]
            </li>
          <li>
            Category Theory Game: Sequel to the Natural Number Game. Designed
            to teach category theory in Lean. Loosely follows the structure of
            Emily Riehl's Category Theory in Context.
            [<a
              className="App-link"
              href="https://github.com/agusakov/category-theory-game"
              target="_blank"
              rel="noopener noreferrer">link</a>]
          </li>
          <li>
              Select chapters and exercises from textbooks:
              <li>
                Linear Algebra Done Right, Sheldon Axler
                [<a
                  className="App-link"
                  href="https://github.com/agusakov/vector_spaces"
                  target="_blank"
                  rel="noopener noreferrer">link</a>]
              </li>
              <li>
                Abstract Algebra, Dummit and Foote
                [<a
                  className="App-link"
                  href="https://github.com/agusakov/m845_lean"
                  target="_blank"
                  rel="noopener noreferrer">link</a>]
              </li>
          </li>
        </ul>
        <header3>Quantum Computing:</header3>
        <ul>
          <li>
            Verified results from Quantum Games and Quantum Strategies by Eisert at al.
            on optimal strategies for the quantum Prisoner's Dilemma by running the game
            on simulated and real quantum computers. Paper forthcoming.
            [<a
                  className="App-link"
                  href="https://github.com/joy-kitson/quantum-games"
                  target="_blank"
                  rel="noopener noreferrer">link</a>]
          </li>
        </ul>
        </div>
        <div>
        <header2>Writings</header2>
        <ul>
          <li>Technical Writing Portfolio for ENGL410 at the University of Delaware
          [<a
                  className="App-link"
                  href="http://technical-writing-portfolio.surge.sh/#/"
                  target="_blank"
                  rel="noopener noreferrer">link</a>]
          </li>
          <li>Papers on quantum computing for PHYS650 at the University of Delaware
            
          </li>
        </ul>
        </div>
        </body>
    </div>
  );
}

export default App;
