function revertToOriginalStyle(inputIndex){
  if(sessionStorage.getItem("broderStyle") != null){
    inputs[inputIndex].style.border = sessionStorage.getItem("broderStyle");
    inputs[inputIndex].style.borderColor = sessionStorage.getItem("broderColor");
  }
  else{
    inputs[inputIndex].style.border = '0px solid';
  }
}

var inputs, inputFieldIndex;
inputs = document.getElementsByTagName('input');
if (sessionStorage.getItem("inputFieldIndexKey") === "NaN" || 
    sessionStorage.getItem("inputFieldIndexKey") === null) {
      inputFieldIndex = parseInt("0");
  }
else {
  revertToOriginalStyle(sessionStorage.getItem("inputFieldIndexKey"));
  if (sessionStorage.getItem("inputFieldIndexKey") == (inputs.length - 1) || firstField == 1) {
      // after visiting all input field, return to the first one.
      inputFieldIndex = parseInt("0");
    }
  else{
      inputFieldIndex = parseInt(inputFieldIndex) + parseInt("1");
    }
}

sessionStorage.setItem('inputFieldIndexKey', inputFieldIndex); // saving current input field index we are in.
// saving old style (before marking the current input field red)
sessionStorage.setItem('broderStyle', inputs[inputFieldIndex].style.border);
sessionStorage.setItem('broderColor', inputs[inputFieldIndex].style.borderColor); 

// marking current input field with red
inputs[inputFieldIndex].style.border = '5px solid';
inputs[inputFieldIndex].style.borderColor = 'red';