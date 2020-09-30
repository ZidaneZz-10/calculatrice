let myScript=document.querySelector("script");
// h1
let myBody=document.querySelector('body');
let titrePrincipal=document.createElement("h1");
titrePrincipal.textContent="Création calculatrice";
myBody.insertBefore(titrePrincipal,myScript);
console.log(myBody);

// div : calculette 
let myDiv=document.createElement("div");
myDiv.setAttribute("id","calculette")
myBody.appendChild(myDiv)
// premier span 
let firstSpan=document.createElement("span")
firstSpan.className="firstSpan";
firstSpan.textContent="mon premier span ";
myDiv.appendChild(firstSpan)
let mySpace=document.createElement("br")
myDiv.appendChild(mySpace)
console.log(firstSpan);
//input
let myInput=document.createElement("input");
myInput.setAttribute("id","myInput");
myInput.setAttribute("type","text");
myDiv.appendChild(myInput);
// les Rows
// Row1
let myContainer1=document.createElement("div");
myContainer1.setAttribute("class","container");
myDiv.appendChild(myContainer1);
let myRow1=document.createElement("div");
myRow1.setAttribute("class","row");
myContainer1.appendChild(myRow1);
let button1=document.createElement("button");
button1.textContent="1";
myRow1.appendChild(button1);
let button2=document.createElement("button");
button2.textContent="2";
myRow1.appendChild(button2);
let button3=document.createElement("button");
button3.textContent="3";
myRow1.appendChild(button3);
let buttonplus=document.createElement("button");
buttonplus.textContent="+";
myRow1.appendChild(buttonplus);

// Row2
let myRow2=document.createElement("div");
myRow2.setAttribute("class","row");
myContainer1.appendChild(myRow2);
let button4=document.createElement("button");
button4.textContent="4";
myRow2.appendChild(button4);
let button5=document.createElement("button");
button5.textContent="5";
myRow2.appendChild(button5);
let button6=document.createElement("button");
button6.textContent="6";
myRow2.appendChild(button6);
let buttonMoins=document.createElement("button");
buttonMoins.textContent="-";
myRow2.appendChild(buttonMoins)

// Row3
let myRow3=document.createElement("div");
myRow3.setAttribute("class","row");
myContainer1.appendChild(myRow3);
let button7=document.createElement("button");
button7.textContent="7";
myRow3.appendChild(button7);
let button8=document.createElement("button");
button8.textContent="8";
myRow3.appendChild(button8);
let button9=document.createElement("button");
button9.textContent="9";
myRow3.appendChild(button9);
let buttonFois=document.createElement("button");
buttonFois.textContent="*";
myRow3.appendChild(buttonFois)

// Row4
let myRow4=document.createElement("div");
myRow4.setAttribute("class","row");
myContainer1.appendChild(myRow4);
let buttonReset=document.createElement("button");
buttonReset.textContent="C";
myRow4.appendChild(buttonReset);
let button0=document.createElement("button");
button0.textContent="0";
myRow4.appendChild(button0);
let buttonEgal=document.createElement("button");
buttonEgal.textContent="=";
myRow4.appendChild(buttonEgal);
let buttonDiv=document.createElement("button");
buttonDiv.textContent="/";
myRow4.appendChild(buttonDiv)









