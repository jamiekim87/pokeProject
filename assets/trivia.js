// we will use this shuffle() function excessively here. Just sayin.
axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(res => {
    console.log(res)






  })


// function that will randomize any array that we name in place of a inside the parens.
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}


// set a variable that selects a random position in the main array. This will determine which position in the array has our correct answer
let target = shuffledArray[0] // remember, since it's a shuffledArray, item 0 will always be a different pokemon
// we can then use this to pull from if we need an image or whatever else


// start loop i=0; i<4; i++
// make an array and push correct, otherAns1, otherAns2, otherAns3 to it
// run that shuffle function to tell it to shuffle the res.data.cards array and call it shuffledArray
let shuffledArray = shuffle(res.data.cards)
answerArray = []
let answer = shuffledArray[i] //then add .whatever for the category we need for an answer
// push answer to answerArray
// end loop

// now put our answer array in a random order, so the correct answer isn't always in the same position
shuffle(answerArray)


questionTypes[
  {
    question: "Who is this pokemon?" //or name that pokemon
    pokeName: //name of a randomly selected pokemon ... do NOT show this on this question
      questionImage: // pulls image of that pokemon ... show this
    correctAnswer: // name of that pokemon
      answers: // need an array here to represent 4 possible answers. IDK if we need to include the correct answer here. Possibly since we will shuffle this when we display it.
  },
  {
    question: "What type of Pokemon is this?"
    pokeName: //name of a randomly selected pokemon, can display or not...up to us
      questionImage: // pulls image of that pokemon ... show this
    correctAnswer: // type of that pokemon
      answers: // need an array here to represent 4 possible answers. IDK if we need to include the correct answer here. Possibly since we will shuffle this when we display it.
  },
  {
    question: "Which of the following types is this pokemon weak against?"
    pokeName: //name of a randomly selected pokemon ... we can show this or not
      questionImage: // pulls image of that pokemon ... show this
    correctAnswer: // type it's weak against
      answers: // need an array here to represent 4 possible answers. IDK if we need to include the correct answer here. Possibly since we will shuffle this when we display it.
  },
  {
    question: "Which of the following types is this pokemon strong against?"
    pokeName: //name of a randomly selected pokemon ... we can show this or not
      questionImage: // pulls image of that pokemon ... show this
    correctAnswer: // type it's strong against
      answers: // need an array here to represent 4 possible answers. IDK if we need to include the correct answer here. Possibly since we will shuffle this when we display it.
  }
]