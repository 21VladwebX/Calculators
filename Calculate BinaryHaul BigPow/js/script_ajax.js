'use strict'

window.onload = function(){
	var BinaryHaul = document.querySelector('#BinaryHaul'); 
	// if(BinaryHaul){alert(1)};
	BinaryHaul.onclick = function(){
		ajaxPost('php/BinaryHaul.php',function(data){
			document.querySelector('.res_BinaryHaul').innerHTML = data;
		});
		
	}
	
	var BigPow = document.querySelector('#BigPow'); 
	// if(BigPow){alert(1)};
	
	BigPow.onclick = function(){
		ajaxPost('php/BigPow.php',function(data){
			document.querySelector('.res_BigPow').innerHTML = data;
		});
	}
	
	function ajaxPost(url,callback) {
		var f = callback || function(data) {};
		var request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if(request.readyState == 4 && request.status == 200){
				f(request.responseText);
				// alert(request.responseText);
			}
		}
		request.open('POST',url);
		request.setRequestHeader('Content-type','multipart/form-data');
		request.send();
	}
}