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
  window.open("other.html","_self");
}
