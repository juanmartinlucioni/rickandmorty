import React from "react";
// import fs from 'fs'

import Card from "./Card";

// const characters = fs.readFileSync('rickandmorty.json')
import characters from "../rickandmorty.json";

function Content() {
  return (
    <div className='cards-wrapper'>
      {characters.map(function (character, idx) {
        return (
          <div className='card' key={idx}>
            <Card characterInfo={character} />
          </div>
        );
      })}
    </div>
  );
}

export default Content;
