module.exports = function reverse(n) {
	n = Math.abs(n);
	let nStr = n.toString();
	let i = nStr.length - 1;
   let result = '';
   while (i >= 0) {
     result = `${result}${nStr[i]}`;
     i--;
  }

   return result; 
}
