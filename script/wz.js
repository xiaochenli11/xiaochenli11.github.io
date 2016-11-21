
var left1=document.getElementById('left1');
var left2=document.getElementById('left2');
var left3=document.getElementById('left3');
var left4=document.getElementById('left4');
var left5=document.getElementById('left5');
var left6=document.getElementById('left6');
var right1=document.getElementById('right1');
var right2=document.getElementById('right2');
var right3=document.getElementById('right3');
var right4=document.getElementById('right4');
var right5=document.getElementById('right5');
var right6=document.getElementById('right6');

function myfun1() {
	left1.className += ' left1'
	left2.className += ' left2'
	left3.className += ' left3'
	left4.className += ' left4'
	left5.className += ' left5'
	left6.className += ' left6'
	right1.className += ' right1'
	right2.className += ' right2'
	right3.className += ' right3'
	right4.className += ' right4'
	right5.className += ' right5'
	right6.className += ' right6'
}

document.onclick=myfun1

