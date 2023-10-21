// write js code here if required

let timer = document.getElementById("timer");



setInterval(function f() {
let time = new Date();
var day = time.getDate();
var month = time.getMonth()+1;
var year = time.getFullYear();

var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

timer.innerText = day+"/"+month+"/"+year+" "+hour%12+":"+min+":"+sec;
},1000);

f();