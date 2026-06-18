const displayValue = document.getElementById('display')

function appendToDisplay(input){
    displayValue.value += input;
    displayValue.scrollLeft = displayValue.scrollWidth;
}
function clearDisplay(){
    displayValue.value = '';
}
function calculate(){
    try {
        displayValue.value = eval(displayValue.value).toFixed(2)

    }

    catch{
        displayValue.value = 'Error';
    }

}
