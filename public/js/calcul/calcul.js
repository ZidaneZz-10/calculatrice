import {button0} from "../structure/structure.js"
import {button1} from "../structure/structure.js"
import {button2} from "../structure/structure.js"
import {button3} from "../structure/structure.js"
import {button4} from "../structure/structure.js"
import {button5} from "../structure/structure.js"
import {button6} from "../structure/structure.js"
import {button7} from "../structure/structure.js"
import {button8} from "../structure/structure.js"
import {button9} from "../structure/structure.js"
import {buttonplus} from "../structure/structure.js"
import {buttonDiv} from "../structure/structure.js"
import {buttonFois} from "../structure/structure.js"
import {buttonMoins} from "../structure/structure.js"
import {buttonReset} from "../structure/structure.js"
import {buttonEgal} from "../structure/structure.js"
import {myInput} from "../structure/structure.js"
import {firstSpan} from "../structure/structure.js"
import {myBody} from "../structure/structure.js"
parseInt(myInput.value);
let element1;
let element2;
let suite;
let resultat;
let numbers=[button0,button1,button2,button3,button4,button5,button6,button7,button8,button9];
let choix=true;
let operateur;
numbers.forEach(element => {
    element.addEventListener('click',()=>{
        if (choix) {
            myInput.value+=element.innerText;
            firstSpan.textContent=myInput.value;
        }
        if (choix==false){
            myInput.value += element.innerText;
            firstSpan.textContent=suite;
            firstSpan.textContent+=myInput.value;
        }
    })
});
//addition
buttonplus.addEventListener("click",()=>{
    firstSpan.textContent=myInput.value;
    choix = false;
    element1=myInput.value;
    operateur=buttonplus.textContent
    firstSpan.textContent += operateur
    suite=firstSpan.textContent;
    myInput.value="";
    console.log(element1);
    if (resultat) {
        element1=resultat;
        firstSpan.textContent=element1;
        operateur=buttonplus.textContent
        firstSpan.textContent += operateur
        suite=firstSpan.textContent;
        myInput.value="";
    }
})
//soustraction
buttonMoins.addEventListener("click",()=>{
    firstSpan.textContent=myInput.value;
    choix = false;
    element1=myInput.value;
    operateur=buttonMoins.textContent
    firstSpan.textContent += operateur
    suite=firstSpan.textContent;
    myInput.value="";
    console.log(element1);
})
//multiplication
buttonFois.addEventListener("click",()=>{
    firstSpan.textContent=myInput.value;
    choix = false;
    element1=myInput.value;
    operateur=buttonFois.textContent
    firstSpan.textContent += operateur
    suite=firstSpan.textContent;
    myInput.value="";
    console.log(element1);
})
//division
buttonDiv.addEventListener("click",()=>{
    firstSpan.textContent=myInput.value;
    choix = false;
    element1=myInput.value;
    operateur=buttonDiv.textContent
    firstSpan.textContent += operateur 
    suite=firstSpan.textContent;
    myInput.value="";
    console.log(element1);
})
buttonEgal.addEventListener("click",()=>{
    element2=myInput.value
    if (operateur=="+") {
        resultat=parseInt(element1)+parseInt(element2);
        myInput.value=resultat;
    }else if (operateur=="-") {
        resultat=parseInt(element1)-parseInt(element2);
        myInput.value=resultat;
    }else if (operateur=="*") {
        resultat=parseInt(element1)*parseInt(element2);
        myInput.value=resultat;
    }else if (operateur=="/") {
        resultat=parseInt(element1)/parseInt(element2);
        myInput.value=resultat;
    }
})
buttonReset.addEventListener("click",()=>{
    resultat="";
    myInput.value="";
    suite="";
    firstSpan.textContent="CLEAR";
    element1="";
    element2="";
})
// keyPress
myBody.addEventListener('keydown', (e)=>{
    let x = Number(e.key)
    if(!isNaN(x)){
        myInput.value += e.key
    } else if (e.key == "C"){
        resultat="";
        myInput.value="";
        suite="";
        firstSpan.textContent="CLEAR";
        element1="";
        element2="";
    }else if (e.key == "+"){
        firstSpan.textContent=myInput.value;
        choix = false;
        element1=myInput.value;
        operateur=buttonplus.textContent
        firstSpan.textContent += operateur
        suite=firstSpan.textContent;
        myInput.value="";
        if (resultat) {
                element1=resultat;
                firstSpan.textContent=element1;
                operateur=buttonplus.textContent
                firstSpan.textContent += operateur
                suite=firstSpan.textContent;
                myInput.value="";
        }
    }else if (e.key == "-"){
        firstSpan.textContent=myInput.value;
        choix = false;
        element1=myInput.value;
        operateur=buttonMoins.textContent
        firstSpan.textContent += operateur
        suite=firstSpan.textContent;
        myInput.value="";
        if (resultat) {
                element1=resultat;
                firstSpan.textContent=element1;
                operateur=buttonMoins.textContent
                firstSpan.textContent += operateur
                suite=firstSpan.textContent;
                myInput.value="";
        }
    }else if (e.key == "*"){
        firstSpan.textContent=myInput.value;
        choix = false;
        element1=myInput.value;
        operateur=buttonFois.textContent
        firstSpan.textContent += operateur
        suite=firstSpan.textContent;
        myInput.value="";
        if (resultat) {
                element1=resultat;
                firstSpan.textContent=element1;
                operateur=buttonFois.textContent
                firstSpan.textContent += operateur
                suite=firstSpan.textContent;
                myInput.value="";
        }
    }else if (e.key == "/"){
        firstSpan.textContent=myInput.value;
        choix = false;
        element1=myInput.value;
        operateur=buttonDiv.textContent
        firstSpan.textContent += operateur
        suite=firstSpan.textContent;
        myInput.value="";
        if (resultat) {
                element1=resultat;
                firstSpan.textContent=element1;
                operateur=buttonDiv.textContent
                firstSpan.textContent += operateur
                suite=firstSpan.textContent;
                myInput.value="";
        }
    }else if(e.key == "Backspace"){
        myInput.value=myInput.value.substr(0,myInput.value.length-1)
    }else if(e.key == "=" || e.key =="Enter"){
            element2=myInput.value
            firstSpan.textContent+=element2
            if (operateur == "+"){
                resultat=parseInt(element1)+parseInt(element2);
                myInput.value=resultat;
            } else if (operateur == "-"){
                resultat=parseInt(element1)-parseInt(element2);
                myInput.value=resultat;
            } else if (operateur == "*"){
                resultat=parseInt(element1)*parseInt(element2);
                myInput.value=resultat;
            } else if(operateur == "/"){
                resultat=parseInt(element1)/parseInt(element2);
                myInput.value=resultat;
            }
    }
})
