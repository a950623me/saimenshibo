//鼠标悬停事件
console.log(1);
var height = document.documentElement.clientHeight;
console.log(height);
//$(".footer").css("height",height+"px");
$(function(){
     //电话hover特效
     $(".LEY_footer_box .f-cta .tel_ico").each(function(index){
     $(".LEY_footer_box .f-cta .tel_ico").eq(index).hover(function(){
	 
		 $(this).animate({"background-position-y":"-25px"},300);
		 $('.LEY_footer_box .f-cta .tel p').eq(index).css("color","#c80000");
	},function(){
		 $(this).animate({"background-position-y":"0px"},300);
		 $('.LEY_footer_box .f-cta .tel p').css("color","#fff");
	}) 
     })
     $('.LEY_footer_box .f-cta .tel p').each(function(i){
     	
     	  $('.LEY_footer_box .f-cta .tel p').eq(i).hover(function(){
			  $(".LEY_footer_box .f-cta .tel_ico").eq(i).animate({"background-position-y":"-25px"},300);
			  $(this).css("color","#c80000");
		},function(){
			 $(".LEY_footer_box .f-cta .tel_ico").eq(i).animate({"background-position-y":"0px"},300);
			 $(this).css("color","#fff");
		}) 
     })
  
     setInterval(function(){

     $(".LEY_footer_box .icon .lg1").animate({"margin-top":"5px"},function(){
     $(this).animate({"margin-top":"0px"});
     })
     $(".LEY_footer_box .icon .lg2").animate({"bottom":"5px"},function(){
     $(this).animate({"bottom":"0px"});
     })

     },1000);
     $(".footer").mousewheel(function(event,delta){
     	    clearTimeout($.data(this, 'timer'));
		    $.data(this, 'timer', setTimeout(function() {
			    
			    if(delta<0){
		     		//$(this).animate({},800);
		     	}
		     	if(delta>0){
		     		$(".LEY_main").animate({"top":-height+"px"},600);
		     		$(".LEY_left_txt").css("display","block"); 
		     		$(".LEY_left_txt").animate({"marginTop":"0px"},800); 
		     		$(".LEY_right_txt").animate({"bottom":"0"},600);
		    		$(".LEY_nav_box").animate({"bottom":"0"},600);
		    		$(".LEY_logo_box").stop().animate({"bottom":"0px"},600);
		     	}  			    
			}, 250));
     })


})
