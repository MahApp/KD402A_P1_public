if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

function onDocumentReady() {
  console.log('Document ready.');
  //upgradeInfo();
  //downgradeErrors();
}

function upgradeInfo(){
  var allReactorElements = document.getElementsByClassName("reactorStatus");
  console.log(allReactorElements);
  for(var i=0; i<allReactorElements.length; i=i+1){
    if(allReactorElements[i].classList.contains("info")){
      allReactorElements[i].classList.add("warning");
      allReactorElements[i].classList.remove("info");
    }
  }
}

function downgradeErrors() {
  var allReactorElements = document.getElementsByClassName("reactorStatus");
  for (var i=0; i<allReactorElements.length; i=i+1) {
    if(allReactorElements[i].classList.contains("error")){
      allReactorElements[i].classList.add("warning");
      allReactorElements[i].classList.remove("error");
    }
  }
}
