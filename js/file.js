var log1 = "JS started..";
var log2 = "no't errors.";

console.log(log1);



function say_hi() {
	var llname = " ";
    var num1 = document.getElementById('num1').value;
    var znack = document.getElementById('znack').value;
    var num2 = document.getElementById('num2').value;
    
    var num1 = +num1;
    var num2 = +num2;
    if (znack == "+"){
    	var otv = num1 + num2;
    	alert("Ответ: " + otv);
    }if (znack == "-"){
    	var otv = num1 - num2;
    	alert("Ответ: " + otv);
    }if (znack == "/") {
    	var otv = num1 / num2;
    	if (otv == Infinity) {
    		alert("На 0 делить нелья");
    	}
    	else{
    		alert("Ответ: " + otv);
    	}
    }if (znack == "*") {
    	var otv = num1 * num2;
    	alert("Ответ: " + otv);
    }
	console.log("Done alert");
}
 
document.getElementById('say').addEventListener('click', say_hi);

console.log(log2); 
