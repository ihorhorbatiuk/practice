/*
You have been provided with some raw HTML/CSS and a few text strings and JavaScript functions; 
you need to write the necessary JavaScript to turn this into a working program, which does the following:

Generates a silly story when the "Generate random story" button is pressed.
Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
Generates a new random silly story every time the button is pressed.
*/


/* In the raw text file, copy all of the code underneath the heading "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" */
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/*section of the raw text file — "2. RAW TEXT STRINGS". This contains text strings that will act as input into our program. We'd like you to contain these inside variables inside*/ 
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertx = ['Willy the Goblin',
                 'Big Daddy',
                 'Father Christmas'];

const inserty = ['the soup kitchen',
                 'Disneyland',
                 'the White House'];

const insertz = ['spontaneously combusted',
                 'melted into a puddle on the sidewalk',
                 'turned into a slug and crawled away'];

/*Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" and paste it into the bottom of your main.js file*/ 
randomize.addEventListener('click', result);

/*Completing the result() function: */
function result() {
  
    /* Create a new variable called newStory, and set its value to equal storyText*/
  let newStory = storyText;

  if(customName.value !== '') { 
    /*Inside the first if block, add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable. */
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    /*Inside the second if block, we are checking to see if the uk radio button has been selected.
     If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade */
    const weight = Math.round(300 / 14) + ' stones';
    const temperature =  Math.round((94 - 32) / 1.8) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

 
  /*Create three new variables called xItem, yItem, and zItem, and make them equal to the result of calling randomValueFromArray()*/
  const xItem = randomValueFromArray(insertx);

  const yItem = randomValueFromArray(inserty);

  const zItem = randomValueFromArray(insertz); 

  /*Next we want to replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: */
  newStory = newStory.replaceAll(':insertx:', xItem);

  newStory = newStory.replace(':inserty:', yItem);

  newStory = newStory.replace(':insertz:', zItem);
  
  /* Finally, in the second-to-last line of the function, make the textContent property of the story variable*/
  story.textContent = newStory;
  story.style.visibility = 'visible';
}