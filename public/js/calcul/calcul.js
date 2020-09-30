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

let numbers=[button0,button1,button2,button3,button4,button5,button6,button7,button8,button9];
let choix=true;
numbers.forEach(element => {
    element.addEventListener('click',()=>{
        if (choix) {
            myInput.value += element.innerText
        }
        firstSpan.textContent=myInput.value
    })
});