window.addEventListener("load", function() {
	var u = document.getElementById("userin");
	var p = document.getElementById("passin");
	var s = document.getElementById("sub");
	var form = document.getElementById("form1");
	s.addEventListener('click', function(e)
	{
		e.preventDefault();
		
		var user = u.value;
		var pass = p.value;
		var plen = p.value.length;
	
		function testCapitals(str){
			if(str.toUpperCase() != str && str.toLowerCase() != str){
				return true;
			}else{
			return false;
			}
		}
	
		if (plen < 8){
			alert("Password too short");
		}
		else if (user==null || user==""){
			alert("Username cannot be left blank");
		}
		else if (pass==null || pass==""){
			alert("Password cannot be left blank");
		}
		else if (testCapitals(pass)==false){
			alert("Password doesn't contain mixed case");
		}
		else  {
			form.submit();
		}
	});

})