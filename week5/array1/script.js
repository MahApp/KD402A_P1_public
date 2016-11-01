var myArray = ["Karl", "Urban", "Mette"];
var myNumberArray = [35, 2.3, 25, 23.4, 23];
if (document.readyState != 'loading') {
    onDocumentReady();
} else {
    document.addEventListener('DOMContentLoaded', onDocumentReady);
}

function onDocumentReady() {
    console.log('Document ready.');
    playWithArray();
    printArray(myNumberArray);
    //printArray(myNumberArray);
    printArray(myArray);
    myArray.sort();
    printArray(myArray);
}

function playWithArray() {
    console.log(myArray);
    console.log(myArray.length);
    for (var i = 0; i < myArray.length; i = i + 1) {
        console.log(myArray[i]);
    }
}

function printArray(array) {
    var outputDiv = document.getElementById("output");
    for (var i = 0; i < array.length; i = i + 1) {
        if (array[i] === "Urban") {
            console.log(array[i]);
            outputDiv.insertAdjacentHTML("beforeend", "<p>" + array[i] + "</p>");
        }
    }
}
