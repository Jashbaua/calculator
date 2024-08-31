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
    if(e.target.classList.contains('operand')){
        operandClicked(e.target.textContent)
    }
    else if(e.target.classList.contains('operator')){
        operatorClicked(e.target.textContent)
    }
    else extraClicked(e.target.textContent)
}
let operand1DotFlag=false,operand2DotFlag=false
function operandClicked(operand){
    console.log(operand)
    if(operator===null){
        if(operand=='.'){
            if(operand1DotFlag==true)return
            operand1DotFlag=true 
        }
        if(operand1===null){
            operand1=''+operand
            display(operand1)
        }
        else{
            if(operand1.length==8)return
            operand1+=operand
            display(operand1)
        }
    }
    else{
        if(operand=='.'){
            if(operand2DotFlag==true)return
            operand2DotFlag=true 
        }
        if(operand2===null){
            operand2=''+operand
            display(operand2)
        }
        else{
            if(operand2.length==8)return
            operand2+=operand
            display(operand2)
        }
    }
}
const disp=document.querySelector('.display')
function display(operand){
    disp.textContent=operand
}