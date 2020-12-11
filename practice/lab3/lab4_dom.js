window.onload = function() {
	var b = document.getElementById("bod");
	var oldMessage = b.innerHTML;
	b.innerHTML = "<h1>Login</h1>" + oldMessage;
	
	var b_child = b.childNodes;
	for (var i=0; i<b_child.length; i++)
	{console.log(b_child[i]);}

	var f = document.getElementById("form1");
	var inp = document.createElement("input");
	inp.setAttribute("type","reset");
	f.appendChild(inp);
}