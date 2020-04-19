/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  // Your code here.
  console.log(rawStory)
  const regex = /(?:^|\W)[n|v|a|](?:$|\W)/g;
  const regexPunc = /[.,\/]/;
  let newArr = [];
  const array = rawStory.split(' ');

array.forEach(element => {

//------------ REPLACE COMMAS-----------//

  if (regexPunc.test(element)) {
    let matRegPunc = element.match(regexPunc);
    console.log(matRegPunc[0])
    if (matRegPunc[0] === ',') {
      element = element.replace(regexPunc, '');
      newArr.push({word: ','});
    }else {
        element = element.replace(regexPunc, '');
        newArr.push({word: '.'});
    }
  }
//------------ REPLACE [N|V|A]-----------//
  if (regex.test(element)) {
    const matchReg = element.match(regex);
    if (matchReg[0] === '[n]') {
      element =element.replace(regex, '');
      newArr.push({word: element, pos: 'noun'});
    }else if (matchReg[0] === '[v]') {
      element =element.replace(regex, '');
      newArr.push({word: element, pos: 'verb'});
    }else if (matchReg[0] === '[a]') {
      element =element.replace(regex, '');
      newArr.push({word: element, pos: 'adj'});
    }
    
  }else {newArr.push({word:element})};
});


  // console.log(newArr)
  return newArr; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);
});


