// Typing Effect

const text="We create unforgettable experiences that inspire, connect and leave lasting memories.";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,25);

}

}

window.onload=typing;
