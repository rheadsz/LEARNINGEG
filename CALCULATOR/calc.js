var result = document.getElementById("result");
var num;
//let currentNumber = '';
//let finalResult=0;

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function isNumber(num){3
// if(num.isInteger(num))
//   return true;
// return false;
//return !isNaN(num);
  if (num == 1 || num == 2 || num == 3 || num == 4 || num == 5 || num == 6 || num == 7 ||
  num == 8 || num == 9 || num == 0){
    return true;
  }
  return false;
}

function calculate() {
  let expression = result.value;
  let currentNumber = '';
  let finalResult=0;
  for(let i=0; i < expression.length ; i++){
      console.log(expression[i]);
      let currentChar = expression[i];
      if(i==0){
        finalResult=parseFloat(expression[0]);
      }
      if (isNumber(currentChar)){
        currentNumber = parseFloat(currentChar);
        
      }else if (currentChar === '+' || currentChar === '-' || currentChar === '*' || currentChar === '/') {
            
              {
            switch(currentChar){
              case '+': 
             
                finalResult += parseFloat(currentNumber);
             
              break;

              case '-': 
              finalResult -=  parseFloat(currentNumber);
            
              break;

              case '*': 
              finalResult *= parseFloat(currentNumber);
          
              break;

              case '/': 
              finalResult /=  parseFloat(currentNumber);
          
              break;
            }
        }
        currentNumber = '';
      }




    //}

  }
  console.log(finalResult);
  result.value = finalResult;
}
