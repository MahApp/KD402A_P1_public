console.log("Hello world!");
var myLittleListWithCoolStuff = document.getElementById('mylist');
for(var i=0; i<100;i=i+1){
  myLittleListWithCoolStuff.insertAdjacentHTML("beforeend","<div>1</div>");
}
