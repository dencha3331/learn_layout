"use strict";


function function_name(n) {
	if (n == 1) return 1;
	return `${function_name(n -1)} ${n}`;
}






console.log(function_name(10));
alert(function_name(4));





