const call=function(){
    console.log('yes')
}
const add1=function(firstNumber,secondNumber){
    console.log(firstNumber,secondNumber,firstNumber+secondNumber)
    return firstNumber+secondNumber
}

module.exports= {call,add1}