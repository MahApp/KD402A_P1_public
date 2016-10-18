console.log('Script running');
var a = 10;
var myOtherVar = "erik"; //Global variabel
var myOtherVar3 = "erik"; //Global variabel

//Wait till all content is loaded, could be external fonts scripts from other servers etc....
if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// Page is loaded! Now event can be wired-up
function onDocumentReady() {
  console.log('Document ready.');
  //Skriv allt som skall hända här
  myFunc(3,5,9);
  var myResult = myFunc(3,5,9);
  console.log("Result: "+ myResult);
  myResult = myFunc(3,6,28);
  console.log("Result: "+ myResult)
  myResult = myFunc(3,832,6,8,9);
  console.log("Result: "+ myResult)
  var theTown = "Malmö";
  var temp = getTempInTown(theTown);
  console.log("Temp in "+theTown+" is "+temp);
  theTown = "Eslöv";
  temp= getTempInTown(theTown);
  console.log("Temp in "+theTown+" is "+temp);
  temp=38;
  console.log("Temp "+temp);
  temp = getTempInTown("Göteborg");
  console.log("Temp "+temp);
}

//Alla mina functioner
function myFunc(a,b,s){
  //Räkna mycket.....
  var _myOtherVar = a+b+s;
  console.log("Hepp a= "+a+" b= "+b+" s= "+s );
  return _myOtherVar;
}


function getTempInTown(town){
  //Hämta info från nätet
  var _localTemp = 0;
  if(town==="Göteborg"){
    _localTemp = 17;
  }
  if(town==="Malmö"){
    _localTemp = 12;
  }
  return _localTemp;
}
