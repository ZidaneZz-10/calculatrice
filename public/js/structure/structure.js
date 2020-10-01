let myScript=document.querySelector("script");
// h1
export let myBody=document.querySelector('body');
let titrePrincipal=document.createElement("h1");
titrePrincipal.textContent="Création calculatrice";
myBody.insertBefore(titrePrincipal,myScript);
// div : calculette 
let myDiv=document.createElement("div");
myDiv.setAttribute("id","calculette")
myBody.appendChild(myDiv)
// premier span 
 export let firstSpan=document.createElement("span")
firstSpan.className="firstSpan";
firstSpan.textContent="CLEAR ";
myDiv.appendChild(firstSpan)
let mySpace=document.createElement("br")
myDiv.appendChild(mySpace)
//input
export let myInput=document.createElement("input");
myInput.setAttribute("type","number")
myDiv.appendChild(myInput);
// les Rows
// Row1
let myContainer1=document.createElement("div");
myContainer1.setAttribute("class","container");
myDiv.appendChild(myContainer1);
let myRow1=document.createElement("div");
myRow1.setAttribute("class","row");
myContainer1.appendChild(myRow1);
export let button1=document.createElement("button");
button1.textContent="1";
button1.style.backgroundColor="grey"
button1.style.border="none"
button1.style.borderRadius="7px"
myRow1.appendChild(button1);
export let button2=document.createElement("button");
button2.textContent="2";
button2.style.backgroundColor="grey"
button2.style.border="none"
button2.style.borderRadius="7px"
myRow1.appendChild(button2);
export let button3=document.createElement("button");
button3.textContent="3";
button3.style.backgroundColor="grey"
button3.style.border="none"
button3.style.borderRadius="7px"
myRow1.appendChild(button3);
export let buttonplus=document.createElement("button");
buttonplus.textContent="+";
buttonplus.style.backgroundColor="rgb(66, 159, 202)"
buttonplus.style.border="none"
buttonplus.style.borderRadius="7px"
myRow1.appendChild(buttonplus);

// Row2
let myRow2=document.createElement("div");
myRow2.setAttribute("class","row");
myContainer1.appendChild(myRow2);
export let button4=document.createElement("button");
button4.textContent="4";
button4.style.backgroundColor="grey"
button4.style.border="none"
button4.style.borderRadius="7px"
myRow2.appendChild(button4);
export let button5=document.createElement("button");
button5.textContent="5";
button5.style.backgroundColor="grey"
button5.style.border="none"
button5.style.borderRadius="7px"
myRow2.appendChild(button5);
export let button6=document.createElement("button");
button6.textContent="6";
button6.style.backgroundColor="grey"
button6.style.border="none"
button6.style.borderRadius="7px"
myRow2.appendChild(button6);
export let buttonMoins=document.createElement("button");
buttonMoins.textContent="-";
buttonMoins.style.backgroundColor="rgb(66, 159, 202)"
buttonMoins.style.border="none"
buttonMoins.style.borderRadius="7px"
myRow2.appendChild(buttonMoins)

// Row3
let myRow3=document.createElement("div");
myRow3.setAttribute("class","row");
myContainer1.appendChild(myRow3);
export let button7=document.createElement("button");
button7.textContent="7";
button7.style.backgroundColor="grey"
button7.style.border="none"
button7.style.borderRadius="7px"
myRow3.appendChild(button7);
export let button8=document.createElement("button");
button8.textContent="8";
button8.style.backgroundColor="grey"
button8.style.border="none"
button8.style.borderRadius="7px"
myRow3.appendChild(button8);
export let button9=document.createElement("button");
button9.textContent="9";
button9.style.backgroundColor="grey"
button9.style.border="none"
button9.style.borderRadius="7px"
myRow3.appendChild(button9);
export let buttonFois=document.createElement("button");
buttonFois.textContent="*";
buttonFois.style.backgroundColor="rgb(66, 159, 202)"
buttonFois.style.border="none"
buttonFois.style.borderRadius="7px"
myRow3.appendChild(buttonFois)

// Row4
let myRow4=document.createElement("div");
myRow4.setAttribute("class","row");
myContainer1.appendChild(myRow4);
export let buttonReset=document.createElement("button");
buttonReset.textContent="C";
buttonReset.style.backgroundColor="red"
buttonReset.style.border="none"
buttonReset.style.borderRadius="7px"
myRow4.appendChild(buttonReset);
export let button0=document.createElement("button");
button0.textContent="0";
button0.style.backgroundColor="grey"
button0.style.border="none"
button0.style.borderRadius="7px"
myRow4.appendChild(button0);
export let buttonEgal=document.createElement("button");
buttonEgal.textContent="=";
buttonEgal.style.backgroundColor="green"
buttonEgal.style.border="none"
buttonEgal.style.borderRadius="7px"
myRow4.appendChild(buttonEgal);
export let buttonDiv=document.createElement("button");
buttonDiv.textContent="/";
buttonDiv.style.backgroundColor="rgb(66, 159, 202)"
buttonDiv.style.border="none"
buttonDiv.style.borderRadius="7px"
myRow4.appendChild(buttonDiv)