let x=document.getElementById("sizeInfo");
let head=document.createElement('h1');
	window.onresize = length;
	  window.onload = length;	
	x.appendChild(head);
	function length() {
	let width=window.outerWidth;
	let height=window.outerHeight;
		head.textContent=`Width:${width} and Height: ${height}`;




