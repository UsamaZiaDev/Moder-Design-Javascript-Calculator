
let getBtnVal = document.querySelectorAll(".btn");
let screenTypingvalue = document.getElementsByClassName("typing-value")
let showResultresult = document.getElementsByClassName("result-value")
let fainalResult = "" ;

for(i=0; i<getBtnVal.length; i++){
    let CurrentBtnVal = getBtnVal[i]
    let vurrentBtnVal = CurrentBtnVal.value

        CurrentBtnVal.addEventListener("click",function(){ 
            if(vurrentBtnVal == "="){
                showResultresult[0].innerHTML = eval(fainalResult)
                fainalResult = ""
            }else if(vurrentBtnVal == "c" || vurrentBtnVal == "R"){
                fainalResult = ""
                screenTypingvalue[0].innerHTML = fainalResult
                fainalResult = ""
            }else{
                fainalResult += vurrentBtnVal
                screenTypingvalue[0].innerHTML = fainalResult
            }
        })
}