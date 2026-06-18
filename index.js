const displayValue = document.getElementById('display')

function appendToDisplay(input){
    displayValue.value += input;
}
function clearDisplay(){
    displayValue.value = '';
}
function calculate(){
    try {
        displayValue.value = eval(displayValue.value)

    }

    catch{
        displayValue.value = 'Error';
    }

}
