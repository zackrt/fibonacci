// this is a function. it's a named
// set of instructions that you can
// call elsewhere in your code. this
// function is called `generateFib`
// and when you call it, you pass it
// a number (`num`)
function generateFib(num) {
  // this creates an empty array.
  // you'll learn about arrays later
  // in this course
  const result = []; 
  // this is called a *for loop*.
  // a for loop executes a block of 
  // instructions a set number of 
  // times. this loop will execute
  // however many times the `num`
  // variable says to do.
  for (let i = 1; i <= num; i++) {
    // here between the { } brackets
    // are the set of instructions
    // that get completed each time
    // through the for loop.
    // this particular set of
    // instructions says that if
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }
    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}


function getFibListLength() {
  // we're stubbing this function,
  // which means having it return a
  // temporary, hard-coded value
  // that is representative of a 
  // typical value this function
  // might return. That way we can 
  // focus on implementing the 
  // unique part of this problem:
  // generating Fibonacci numbers
  return 20;
}


// this function is responsible
// for displaying Fibonacci
// numbers in the DOM. It appends
// each result item as a separate `<p>` element
function displayFibs(fibs) {
  const mainEl = document.getElementsByTagName('main')[0];
  for (let i=0; i < fibs.length; i++) {
    console.log(fibs[i]);
    const newEl = document.createElement('p');
    newEl.innerText = fibs[i];
    mainEl.appendChild(newEl);
  }
}

// we define a `main` function that
// is responsible for calling
// the three other functions
// we called, in the right order,
// and routing outputs from one
// function into another.
function main() {
  const fibLimit = getFibListLength();
  const fibs = generateFib(fibLimit);
  displayFibs(fibs);
}

// once the page has fully loaded,
// the function between the `()` parens runs.
// you'll learn more about this later.
$(main);
