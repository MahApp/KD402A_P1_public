var firstVariable = "Hej";
if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

function onDocumentReady() {
  console.log('Document ready.');
  //classRemoveAdd();
  firstFunction();
  secondFunction();
  thirdFunction(firstVariable);
  thirdFunction("Another");
  var localHere = fourthFunction(3,4);
  console.log ("Result: "+ localHere);
  localHere  = fourthFunction("Jag ","Heter");
  console.log(localHere);
  var divToAddChildrenTo = document.getElementById("myFirstDiv");
  workOnAnElement(divToAddChildrenTo);
  divToAddChildrenTo = document.getElementById("mySecondDiv");
  workOnAnElement(divToAddChildrenTo);
}



function firstFunction(){
  var secondVariable = "på er";
  console.log("In the function "+firstVariable+ " "+secondVariable);
}

function secondFunction(){
 console.log("In the function "+firstVariable);
}

function thirdFunction(myVar){
  console.log("myVar: "+myVar);
}

function fourthFunction(oneVar,anotherVar){
  console.log("oneVar: "+oneVar+" anotherVar: " + anotherVar);
  var localVar = oneVar + anotherVar;
  return localVar;
}

function workOnAnElement(e){
  e.insertAdjacentHTML("beforeend","<p>Inserted</p>");
}
