const display = document.querySelector(".display")
const controlButtons = document.querySelector(".controls").children

const allSymbols = ["+", "-", "*", "/", "%", "DEL", "AC", "="]

let firstValue = ""
let secondValue = ""
let symbol = ""
let result = ""

// function to calculate
const calculate = ()=> {
    // converting from strings to numbers
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    // the actual calculation
    if(symbol === "+"){
       result = firstValue + secondValue
    }
    if(symbol === "-"){
        result = firstValue - secondValue
    }
    if(symbol === "*"){
        result = firstValue * secondValue
    }
    if(symbol === "/"){
        result = firstValue / secondValue
    }
    if(symbol === "%"){
        result = firstValue % secondValue
    }

    display.innerText = result
    firstValue = result
    secondValue = ""
}

for (let button of controlButtons){
    button.addEventListener("click", ()=> {
        const btnValue = button.innerText

        const btnValueIsSymbol = allSymbols.includes(btnValue)

        if(!secondValue && btnValue === "="){
            return firstValued
        }


        if(firstValue && btnValueIsSymbol){
            if(secondValue){
                calculate()
            }
            // secondValue && calculate()
            symbol = btnValue
            console.log(symbol)
        }
        else if (!symbol){
            firstValue += btnValue
        }
        else if (symbol){
            secondValue += btnValue
        }

        if(btnValue !== "="){
            display.innerText += btnValue
        }

        // clear
        if (btnValue === "AC" ||btnValue === "DEL") {
            display.innerText = "";
            firstValue = "";
            secondValue = "";
            symbol = "";
            result = "";
          }
        

    })
}
