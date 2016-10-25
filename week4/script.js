console.log('Script running');
if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}
function onDocumentReady() {
  console.log('Document ready.');

  for(var i=0; i < 10; i=i+1){
    console.log(i);
  }

  for(var j=1; j < 100; j=j+1){
    if(j>50){
      console.log(j);
    }
  }

  for(var k=200; k > 100; k=k-1){
    console.log(k);
  }
  testRandom();
  randomShow();
}


function testRandom()  {
  var randomNumber =  Math.random()*100;
  for(var i =0;i<=100;i=i+1){
    randomNumber = Math.random()*100;
    var randomNumber = Math.round(Math.random()*100);
    console.log("Random: "+randomNumber)
  }
}

function randomNumber(end)  {
  var randomNumber;
  randomNumber = Math.random()*end+1;
  randomNumber = Math.round(randomNumber);
  return randomNumber;
}

function randomShow(){
  var coreElement = document.getElementById("core");
  for (var i = 0;i<100; i = i+1){
    var random = randomInt();
    console.log("puff");
    if(random%2===0){
      coreElement.insertAdjacentHTML("beforeend","<p style=\"color:green\">"+random+"</p>");
    }else{
      coreElement.insertAdjacentHTML("beforeend","<p style=\"color:red\">"+random+"</p>");
    }
  }
}

function randomInt(){
  var randomNumber;
  randomNumber = (Math.random()*998)+1;
  randomNumber = Math.round(randomNumber);
  return randomNumber;
}
