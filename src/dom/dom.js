/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  // Write your code here
  const element = document.getElementById("change-my-color")
  element.style.color = "red"
}


/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  // Write your code here
  let paragraphe = document.createElement("p");
  let newContent = document.createTextNode("Bonjour");
  paragraphe.appendChild(newContent);

  let currentDiv = document.getElementById("add-your-elements-in-this-element");
  currentDiv.appendChild(paragraphe);

  let para = document.createElement("p");
  let Content = document.createTextNode("Toto");
  para.appendChild(Content);

  currentDiv.appendChild(para);
 
}



/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  // Write your code here
  const element = document.getElementById('add-list-here');

  const ul = document.createElement('ul');
  listElements.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    li.style.backgroundColor = item.color;
    ul.appendChild(li);
  });
  element.appendChild(ul);
}


