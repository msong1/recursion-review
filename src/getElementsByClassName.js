//If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return [...document.getElementsByClassName(className)];
// };

//But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, element) {
  // your code here
  // You should use document.body, element.childNodes, and element.classList
  /*
    I - string of className
    O - array of html elements (as objects)
    C -
    E -

    Strategy:
  */
  // Pseudocode
  //  prep
  var result = [];
  var element = element || document.body;

  var checkClassContains = function(className, element) {
    return element.classList && element.classList.contains(className);
  };

  // Base case:
  // If elementChild doens't have any child
  if (element.childNodes.length === 0) {
    // check if it has a class that is className
    if (checkClassContains(className, element)) {
      return [element];
    }// if not return an empty array
    return [];
  }

  // Recursive case:
  // if it has a class of which value is className
  if (checkClassContains(className, element)) {
    result.push(element);
  }
  // check childNodes of context;
  var children = element.childNodes;
  children.forEach(function (child) {
    result = result.concat(getElementsByClassName(className, child));
  });

  console.log(result);
  return result;
};