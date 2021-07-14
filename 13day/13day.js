/*
window.onload = function(event){
    alert(event)
        var clock = document.getElementById('clock');
        
        setInterval(function(){
            var now = new Date();
            clock.innerHTML = now.toString();
        }, 1000);
};
*/
var calc=0;

function check(){
    var number1 = parseFloat(document.getElementById('number_1').value);
    var number2 = parseFloat(document.getElementById('number_2').value);
    var numberGuess = parseFloat(document.getElementById('number_guess').value);
    var exp = "";
    var rst = 0;
    switch(calc){
        case 0: {
            document.getElementById('res').innerHTML = "부호를 선택하고 다시 확인해주세요!";
            break;
        }
        case 1: {
            rst = number1 + number2;
            exp = number1 + " + " + number2 + " = " + rst;
            chk(rst, numberGuess, exp)
            break;
        }
        case 2: {
            rst = number1 - number2;
            exp = number1 + " - " + number2 + " = " + rst;
            chk(rst, numberGuess, exp)
            break;
        }
        case 3: {
            rst = number1 * number2;
            exp = number1 + " * " + number2 + " = " + rst;
            chk(rst, numberGuess, exp)
            break;
        }
        case 4: {
            rst = number1 / number2;
            exp = number1 + " / " + number2 + " = " + rst;
            chk(rst, numberGuess, exp)
            break;
        }
    }
}

function chk(rst, guess, exp){
    if(rst == guess){
        document.getElementById('res').innerHTML = "맞았어요!! 훌륭해요!!! " + exp;
    } else{
        document.getElementById('res').innerHTML = "안타까워요!! 다시 도전해보세요!! " + exp;
    }
}

function sum(){
    calc = 1;
}

function min(num1, num2){
    calc = 2;
}

function mul(num1, num2){
    calc = 3;
}

function div(num1, num2){
    calc = 4;
}