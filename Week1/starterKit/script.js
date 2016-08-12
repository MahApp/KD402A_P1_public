// Call 'onDocumentReady' when page is loaded
console.log('Script running');
if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// Page is loaded! Now event can be wired-up
function onDocumentReady() {
  console.log('Document ready.');

  var el = document.getElementById('button1');
  // Listen to any click that happens on button1
  el.addEventListener('click', onButtonClicked);
}

// Called according to 'click' event
function onButtonClicked(e) {
  console.log('onButtonClicked.');
  // Get a reference to the element we want to manipulate
  // Here, we're using the id 'text1' to find the right place.
  var text = document.getElementById('text1');
  console.dir(text);
  text.innerHTML = "New text";
}
