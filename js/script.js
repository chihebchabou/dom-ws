// console.log(document);
// console.log(typeof document);
// console.dir(document);
// console.log(document.title);
// console.log(document.title);
// console.dir(document.body);
// console.log(document.body.innerHTML);

document.title = 'DOM WORKSHOP';

// Get add button by id
var addBtn = document.getElementById('addElem');

// Get the home section
var homeSection = document.getElementById('home');

// Add event to the button
addBtn.addEventListener('click', addParagraph);

function addParagraph() {
  var p = document.createElement('p');
  var btn = document.createElement('button');
  btn.innerText = 'Make it red';
  p.innerText = 'Hello F2 ';
  p.append(btn);
  homeSection.append(p);

  // Add click event to the button
  btn.addEventListener('click', makeItRed);
}

function makeItRed(event) {
  // Get the button using event.target
  var b = event.target;
  console.log(b);

  // Get the parent element of the button
  var p = b.parentElement;
  console.dir(p);

  // Change the color of the text
  p.style.color = 'red';
}
