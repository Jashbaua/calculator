let operand1=null,
    operand2=null,
    operator=null

function add(num1,num2){
    return num1+num2
}
function subtract(num1,num2){
    return num1-num2
}
function multiply(num1,num2){
    return num1*num2
}
function divide(num1,num2){
    if(num2==0)return "div by 0"
    return num1/num2
}
function operate(operand1,operand2,operator){
    switch(operator){
        case '+':return add(operand1,operand2)
        case '-':return subtract(operand1,operand2)
        case '*':return multiply(operand1,operand2)
        case '/':return divide(operand1,operand2)
    }
}

let inpBtns=document.querySelectorAll('button')
inpBtns.forEach((inpBtn)=>{
    inpBtn.addEventListener('click',doButtonAction)
})
function doButtonAction(e){
    console.log('pressd')
}