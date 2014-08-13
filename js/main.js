
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
  
  
  
  
  $("#menu").mouseenter(function(){
	  $("#menu").click;
	  $("#menu2").show(250);  
	  });

  
  $("#menu2").mouseleave(function(){
	  $("#menu2").hide();
	  });
  
  $(".navbar-brand,#li1,#myCarousel,.navbar-collapse collapse,.navbar-header").mouseenter(function(){
	  $("#menu").css("background-color","#222");
	  $("#menu2").hide();  
	  });
  
});




