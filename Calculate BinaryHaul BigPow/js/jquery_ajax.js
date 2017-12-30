'use strict'
$(document).ready(function(){
	$('#form_BinaryHaul').on('submit', 
		function (e){
			e.preventDefault();
			var $that = $(this);
			// formData = new FormData($that.get(0)); //кодирует форму для отправки на сервер
			// formData = $('#int');
			$.ajax ({
					
				url: $that.attr('action'),
				// url: 'php/BinaryHaul.php',
				type: $that.attr('method'),
				data: $('#int'),
				success: function(json){
						// alert(1);
						$('.res_BinaryHaul').html(json);
						// alert(json);
				
				},
				error: function(ass){
					alert("ERROR");
				}
			});		
	});
	$('#form_BidgPow').on('submit', 
		function (e){
			e.preventDefault();
			var $that = $(this);
			// formData = new FormData($that.get(0)); //кодирует форму для отправки на сервер
			// formData = $('#form_BidgPow').serialize();
			var data = $('#form_BidgPow').serialize();
			// data = data.serialize();
			$.ajax ({
					
				url: $that.attr('action'),
				type: $that.attr('method'),
				data: data,
				success: function(json){
						// alert(1);
						$('.res_BigPow').html(json);
						// alert(json);
				
				},
				error: function(ass){
					alert("ERROR");
				}
			});
			
		});	
})