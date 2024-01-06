// Limit 127
var outputBox = document.getElementById("output_box");
var enterButton = document.getElementById("button");
var inputBox = document.getElementById("input");

function binaryConvert(input){
    var output = Array(15).fill('0')

    for(var i = 15; input > 0; i--){
        if (input >= 2 ** i){
            output[15 - i] = 1;
            input -= 2 ** i;
        }
    }


    outputBox.value = output.join('');
    
    
}

enterButton.addEventListener("click", function () {
    var inputValue = parseInt(inputBox.value, 10);
    if(inputValue >= 65536){
        outputBox.value = "Error! Please enter any number below 65,536.";
    } else{
        binaryConvert(inputValue);
    }
    
});