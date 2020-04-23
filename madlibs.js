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
  //const = /[, ]+/g;
 // const regex = (?:^|\W)[n|v|a](?:$|\W);
 // const regexPunc = /[.,\/]/;
 let newArr = [];
function parseStory(rawStory) {
  // Your code here.
  // console.log(rawStory)
  const regex = /(?:^|\W)[n|v|a|](?:$|\W)/g;
  const regexPunc = /[.,\/]/;
  // let newArr = [];
  const array = rawStory.split(' ');

array.forEach(element => {

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

//------------ REPLACE COMMAS-----------//
  if (element.match(regexPunc)) {
    let matchReg = element.match(regexPunc)[0];
    element = element.replace(regexPunc, '');
      newArr.push({word: matchReg});}
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
  let madLibsEdit = document.querySelector('.madLibsEdit');
  let madLibsPreview = document.querySelector('.madLibsPreview');

  for (let element of newArr) {
    // console.log(element)
    if (!element.pos) {
      // console.log(element)
      let editSpan = document.createElement('span');
      editSpan.innerText = element.word + ' ';
      madLibsEdit.appendChild(editSpan);
      let prevSpan = document.createElement('span');
      prevSpan.innerText = element.word + ' ';
      madLibsPreview.appendChild(prevSpan);

    }
    else {
      let cInput = document.createElement('input');
      cInput.setAttribute('class', element.pos);
      cInput.setAttribute('type', 'text');
      cInput.setAttribute('maxlength', '20');
      cInput.setAttribute('placeholder', `${element.pos} `);
//------------- SPAN FOR INPUT VALUES PREVIEW----------//
      let inputValPrev = document.createElement('span');
      let x = document.createTextNode(`(${element.pos}) `);
      inputValPrev.appendChild(x);
      inputValPrev.style.color = '#ff8a0d';
//---------- DISPLAY INPUT CHANNGES ---------------//
      cInput.addEventListener('input', function(){
        if (cInput.value ) {
        inputValPrev.style.backgroundColor='#3d3d3d'
        inputValPrev.innerText = `${cInput.value} `;
          console.log('baba');
        }else {
          inputValPrev.innerText = `(${cInput.placeholder})`;
          inputValPrev.style.backgroundColor='#fff'

        }
      })
      madLibsPreview.appendChild(inputValPrev);
      // madLibsPreview.appendChild(cInput);
      madLibsEdit.appendChild(cInput);
    }
  }


  let inputArr = document.querySelectorAll('input');
  console.log(inputArr)
  for (let i = 0; i< inputArr.length-1; i++) {
    let input = inputArr[i]
    console.log(typeof(input))
    input.addEventListener('keyup', function(e){
      if (e.keyCode == 13) {
        inputArr[i+1].focus();
      }
    })
    console.log(input)
  }

  // cInput






})


// prevSpan.innerText = cInput.value;
// madLibsPreview.appendChild(prevSpan);
// madLibsEdit.appendChild(cInput);


// let re;
// re = /hello/;
// re= /hello/i; // i = case insesnitive ;
// // re= /hello/g; // Global search 
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr)

// console.log(re.source);

// // exec() - Return result in an array or null
// const result = re.exec('hello world');

// // match() - return result array or null
// const str= 'Hello There';
// const  result = str.match(re);
// console.log(result);

//------------ REPLACE COMMAS-----------//
  // if (regexPunc.test(element)) {
  //   let matRegPunc = element.match(regexPunc);
  //   console.log(matRegPunc[0])
  //   if (matRegPunc[0] === ',') {
  //     element = element.replace(regexPunc, '');
  //     newArr.push({word: ','});
  //   }else {
  //       element = element.replace(regexPunc, '');
  //       newArr.push({word: '.'});
      
  //   }
  // }

 