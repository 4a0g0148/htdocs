
	$(function(){
		$('#gotop').click(function(){
			var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
			$body.animate({
				scrollTop: 0
			}, 600);

			return false;
		});
	});
	
	

$(document).ready(function(){
  $(".mouseevent").mouseover(function(){
	  $(this).css("background-color","#81B2CC");
  });
  $(".mouseevent").mouseout(function(){
	  $(this).css("background-color","#89B9D2");
  });
});
