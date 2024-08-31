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
function operate(){
    let num1=Number(operand1),num2=Number(operand2)
    switch(operator){
        case '+':return add(num1,num2)
        case '-':return subtract(num1,num2)
        case '*':return multiply(num1,num2)
        case '/':return divide(num1,num2)
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
        operatorClicked(e.target)
    }
    else extraClicked(e.target.textContent)
}
let operand1DotFlag=false,operand2DotFlag=false
function operandClicked(operand){
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
function display(displayText){
    if(!isNaN(Number(displayText)))displayText=Number(displayText)
    disp.textContent=displayText
}
function operatorClicked(newOperator){
    if(newOperator.textContent=="="){
        if(operator!==null){
            let result=makeDisplayable(operate())
            display(result)
            toggleHighlight(operator)
            operator=null
            operand1=result
            operand1DotFlag=result.includes('.')
            operand2=null
            operand2DotFlag=false
        }
    }
    else{
        if(operator===null){
            if(operand1!==null){
                toggleHighlight(newOperator.textContent)
                operator=newOperator.textContent
            }
        }
        else{
            if(operand2===null){
                toggleHighlight(operator)
                toggleHighlight(newOperator.textContent)
                operator=newOperator.textContent
            }
            else{
                let result=makeDisplayable(operate())
                display(result)
                toggleHighlight(operator)
                toggleHighlight(newOperator.textContent)
                operator=newOperator.textContent
                operand1=result
                operand1DotFlag=result.includes('.')
                operand2=null
                operand2DotFlag=false
            }
        }
    }
}
function makeDisplayable(num){
    let result=num.toString()
    let dotIndex=result.indexOf('.')
    if(dotIndex==-1){
        return result.length>8?"Exceeds!":result
    }
    else{
        return dotIndex>6?"Exceeds!":(+num.toFixed(7-dotIndex)).toString()
    }
}
function toggleHighlight(operator){
    switch(operator){
        case '+':
            operator='add'
            break
        case '-':
            operator='subtract'
            break
        case '*':
            operator='multiply'
            break
        case '/':
            operator='divide'
            break
    }
    let op=document.querySelector('.'+operator)
    op.classList.toggle('highlight')
}
function extraClicked(clickItem){
    switch(clickItem){
        case 'AC':
            operand1=null
            operand2=null
            operand1DotFlag=false
            operand2DotFlag=false
            operator=null
            display('0')
        case 'Back':goBack()
        break
        case '%':getPercent()
    }
}
function goBack(){
    if(operand2!==null){
        operand2DotFlag=operand2[operand2.length-1]!='.'
        operand2=operand2.slice(0,-1)
        display(operand2)
    }
    else if(operand1!==null){
        operand1DotFlag=operand1[operand1.length-1]!='.'
        operand1=operand1.slice(0,-1)
        display(operand1)
    }
}
function getPercent(){
    if(operand2!==null){
        operand2=makeDisplayable((Number(operand2)/100))
        operand2=isNan(operand2)?'0':operand2
        operand2DotFlag=operand2.includes('.')
        display(operand2)
    }
    else if(operand1!==null){
        operand1=makeDisplayable((Number(operand1)/100))
        operand1=isNaN(operand1)?'0':operand1
        operand1DotFlag=operand1.includes('.')
        display(operand1)
    }
}