function doMath(){
	var num1 = document.getElementById('input1').value
	var num2 = document.getElementById('input2').value
	var num3 = document.getElementById('input3').value
	var num4 = document.getElementById('input4').value
	var num5 = document.getElementById('input5').value
	var num6 = document.getElementById('input6').value
	var num7 = document.getElementById('input7').value
	var num8 = document.getElementById('input8').value
	
var sum1 = parseInt(num1 *5)+ parseInt(num2 *5)+ parseInt(num3 *5)+ parseInt(num4 *15)+ parseInt(num5 *15)+ parseInt(num6 *20)+ parseInt(num7 *25)+ parseInt(num8 *10); 
	sum=sum1/100;
	document.getElementById('total').value = sum;
	
	}
function runclear()
{
var num1 = document.getElementById('input1').value="";
	var num2 = document.getElementById('input2').value="";
	var num3 = document.getElementById('input3').value="";
	var num4 = document.getElementById('input4').value="";
	var num5 = document.getElementById('input5').value="";
	var num6 = document.getElementById('input6').value="";
	var num7 = document.getElementById('input7').value="";
	var num8 = document.getElementById('input8').value="";
	var num9 = document.getElementById('total').value = "";
	var sum = "";
	document.getElementById('total').value;
}