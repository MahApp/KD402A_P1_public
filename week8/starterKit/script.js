var allThePeople = [];
if (document.readyState != 'loading'){
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);

}

// Page is loaded! Now event can be wired-up
function onDocumentReady() {
  console.log('Document ready.');
  var person1 = new Person("Elisa",176,1995,"person3.jpeg");
  //console.log("Name: "+person1.name+" age "+person1.getAge());
  var person2 = new Person("Olle",176,1853,"person0.jpeg");
  //console.log("Name: "+person2.name+" age "+person2.getAge());
  allThePeople.push(person1);
  allThePeople.push(person2);
  allThePeople.push(new Person("Ellen",176,1948,"person4.jpg"));
  showEm();
  document.addEventListener("mouseover",hover);
}

function hover(e){
  if (e.target.classList.contains("personStyle")){
    console.log(e.target.ID);
  }
}
function showEm(){
  for(var i=0;i<allThePeople.length;i=i+1){
    console.log("Name: "+allThePeople[i].name+" age "+allThePeople[i].getAge());
    console.log("Image: "+ allThePeople[i].image);
    var newDiv = document.createElement("div");
    var topDistance = i*250 + 100;
    newDiv.style.top=topDistance+"px" ;
    var leftDistance = i*250 + 100;
    newDiv.style.left=leftDistance+"px" ;
    //images
    console.log("url(\"images/"+allThePeople[i].image+"\")");
    newDiv.style.backgroundImage = "url(\"images/"+allThePeople[i].image+"\")";
    //name
    var nameTag = document.createElement("p");
    nameTag.innerText = allThePeople[i].name;
    newDiv.appendChild(nameTag);
    newDiv.classList.add("personStyle");
    newDiv.ID=i;
    document.body.appendChild(newDiv);
  }
}



function Person(name,length,born,image){
  this.name = name;
  var thisYear = new Date().getFullYear();
  if(born>1900&&born<thisYear){
    this.born = born;
  }else{
    this.born=0;
  }
  //gör indatakoll!!!!
  this.length = length;
  this.image = image;

  this.getAge = function(){
    var theAge=0;
    if(this.born!==0){
      theAge = thisYear - this.born;
    }
    return theAge;
  }
}
