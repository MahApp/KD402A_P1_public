console.log('Script running');
var localVariable = 3; //Never use the same name!!!!!
//Wait till all content is loaded, could be external fonts scripts from other servers etc....
if (document.readyState != 'loading') {
    onDocumentReady();
} else {
    document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// Page is loaded! Now event can be wired-up
function onDocumentReady() {
    console.log('Document ready.');
    var sectionElement = document.getElementById("section");
    //sectionElement.classList.add("hidden");
    //sectionElement.classList.remove("hidden");
    //sectionElement.classList.toggle("hidden");
    //OpenClose
    var expandElement = document.getElementById("expand");
    expandElement.addEventListener("click",openClose);
    //Input
    var nameInputElement = document.getElementById("nameInput");
    nameInputElement.addEventListener("keypress",keyPressedFunction);

}

function openClose(){
  console.log("Click");
  var sectionElement = document.getElementById("section");
  if(sectionElement.classList.contains("hidden")){
    sectionElement.classList.remove("hidden");
  }else{
    sectionElement.classList.add("hidden");
  }

  //sectionElement.classList.toggle("hidden");
}

function keyPressedFunction(e){
  console.log("keypressed: "+e.key);
  console.log("keypressed: "+e.code);
  if(e.code==="Enter"){
    console.log("Enter pressed");
    //Hämta rätt element och byt css-class till röd på den.

  }
}
