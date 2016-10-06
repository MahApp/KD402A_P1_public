console.log('Script running');
console.log(5*2 < 10);
console.log("This is a text in \"JavaScript\" it is called a string");
console.log(3 === "hej");
// Call 'onDocumentReady' when page is loaded
//This so we don't run code untill everything is loaded.//
if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// Page is loaded!  The code above runs this function when the page is fully loaded
//Now events can be wired-up
function onDocumentReady() {
  //Start of function onDocumentReady with the måsvinge above
  console.log('Document ready.');
  //Here add all things you want to happen when the page is loaded like listening for keypress
  //Get a handle to the button
  var el = document.getElementById('button1');
  // Listen to any click that happens on button1 if a click is parformed
  //the onButtonClick function is called.
  el.addEventListener('click', onButtonClicked);
  //Bellow is the ending Måsvinge for the onDocumentReady function
}

// Called according to 'click' event
function onButtonClicked(e) {
  console.log('onButtonClicked.');
  // Get a reference to the element we want to manipulate
  // Here, we're using the id 'text1' to find the right place.
  var text = document.getElementById('text1');
  console.log(text);
  text.innerHTML = "New text";
}
