import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';
import Box from './components/Box';

let wrapperParagraph = 'Lorem ipsum dolor sit amet...'
let space = ["Asteroids", "Comets", "Moon", "Planets", "Stars", "Sun"];
let numbersDate = (new Date).toString();
let randomNumber = parseInt(Math.random() * 100);

ReactDOM.render(
  // <div>
  // <Box
  // boxClass='list'
  // header="Here is a list of items"
  // listy={space}
  // />
  // </div>,
  // <Box
  //   boxClass='numbers'
  //   header="Today's Date and Random Number"
  //   numbers={numbersDate}
  //   random = {randomNumber}
  // />
  // <Box
  //   boxClass='picture'
  //   header='Look at this picture'
  //   imageSrc='https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'
  //   imageAlt='Clever EEs'
  // />
    // <Box
    //   boxClass='wrapper'
    //   header='I am the wrapper'
    //   paragraph={wrapperParagraph}
    // />
    // <Box
    // boxClass='picture'
    // header='Look at this picture'
    // picture={pictureAlt}
    // />
  document.getElementById('app')
);
