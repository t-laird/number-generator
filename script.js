var lowerLim = document.getElementById('low');
var upperLim = document.getElementById('high');
var arraySize = document.getElementById('array-size');
var submitButton = document.getElementById('submit');
var arrayContainer = document.getElementById('array-holder')


submitButton.addEventListener('click',createArray);

function createArray (e) {
  e.preventDefault();
  var lowerLimValue = lowerLim.value;
  var upperLimValue = upperLim.value;
  var arraySizeValue = arraySize.value;
  var resultArray = [];
  for (var i = 0 ; i < arraySizeValue; i++){
    var random = Math.floor(Math.random()*(upperLimValue-lowerLimValue) + lowerLimValue);
    resultArray.push(random);
  }
  arrayContainer.innerHTML += ('[' + resultArray + ']');
  
}

