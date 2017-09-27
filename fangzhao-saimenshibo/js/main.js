var height = document.documentElement.clientHeight;
			$(".LEY_right_txt").height(height);
			$(".LEY_head_box").mousewheel(function(event, delta) {
				 clearTimeout($.data(this, 'timer'));
				  $.data(this, 'timer', setTimeout(function() {
				      
				    if(delta < 0) {

				    	//旋转特效
				    	
                    $(".menu-nav1").css("display","block");
					$(".menu-nav2").css("display","none");
					$(".menu-content").css("background","#fff");
					$(".LEY_icon").each(function(i){
						
						$(this).css({"background":"#000","top":i*16+"px"});
					})
					$(".menu-nav2 a").each(function(i){
						$(this).animate({"marginLeft":"50px"},100*i);
					})
					$(".LEY_icon").css("background","#000");
					$(".LEY_icon1").css("transform","rotate(0deg)");
					$(".LEY_icon2").css("transform","rotate(0deg)");
                    flag=true;

					$(".LEY_main").animate({
						"top": -height + "px"
					}, 600);
					$(".LEY_carousel").css("display","none");
					$(".LEY_number").css("display","block");
					$(".LEY_left_txt").animate({"width":"208px","height":"318px","left":"0px","top":"0px"},1000);
					$(".LEY_right_txt").animate({"height":"66px"},800,function(){
						$(this).addClass("addbg");
					});
					$(".LEY_right_txt .LEY_icon").css("background","#fff");
					$(".LEY_nav_box .LEY_move").animate({"height":"66px"},800);
					$(".LEY_move .know-me").css("display","none");
					$(".LEY_move .nav").css("display","block");
					$(".LEY_logo_box").stop().animate({"width":"67%"},600);
				
				  }
			    }, 250));
			})
			$(".LEY_carousel").mousewheel(function(event,delta){
				clearTimeout($.data(this, 'timer'));
				  $.data(this, 'timer', setTimeout(function() {
				      
				    if(delta < 0) {
                      
                      //旋转特效
				    	
                    $(".menu-nav1").css("display","block");
					$(".menu-nav2").css("display","none");
					$(".menu-content").css("background","#fff");
					flag=true;
					$(".LEY_icon").each(function(i){
						
						$(this).css({"background":"#000","top":i*16+"px"});
					})
					$(".menu-nav2 a").each(function(i){
						$(this).animate({"marginLeft":"50px"},100*i);
					})
					$(".LEY_icon").css("background","#000");
					$(".LEY_icon1").css("transform","rotate(0deg)");
					$(".LEY_icon2").css("transform","rotate(0deg)");

					$(".LEY_main").animate({
						"top": -height + "px"
					}, 600);
					$(".LEY_carousel").css("display","none");
					$(".LEY_number").css("display","block");
					$(".LEY_left_txt").animate({"width":"208px","height":"318px","left":"0px","top":"0px"},1000);
					$(".LEY_right_txt").animate({"height":"66px"},800,function(){
						$(this).addClass("addbg");
					});
					$(".LEY_right_txt .LEY_icon").css("background","#fff");
					$(".LEY_nav_box .LEY_move").animate({"height":"66px"},800);
					$(".LEY_move .know-me").css("display","none");
					$(".LEY_move .nav").css("display","block");
					$(".LEY_logo_box").stop().animate({"width":"67%"},600);
				  }
			    }, 250));
			})		
			$(".LEY_float").height(height);
			var flag=true;
			$(".LEY_right_txt .menu_icon").on("click",function(){
				if(flag==true){
					$(".LEY_icon").css({"background":"#fff","top":"8px"});
					$(".LEY_icon2").addClass("rorate2-active");
					$(".LEY_icon1").addClass("rorate1-active");
					console.log(this);
					$(".menu-content").css("background","#c80000");
					$(".menu-nav1").css("display","none");
					$(".menu-nav2").css("display","block");
					$(".menu-nav2 a").each(function(i){
						$(this).animate({"marginLeft":"0px"},100*i);
					})
					$(".LEY_icon1").css("transform","rotate(225deg)");
					$(".LEY_icon2").css("transform","rotate(-225deg)");
					flag=false;
				}else{
					$(".menu-nav1").css("display","block");
					$(".menu-nav2").css("display","none");
					$(".menu-content").css("background","#fff");
					flag=true;
					$(".LEY_icon").each(function(i){
						
						$(this).css({"background":"#000","top":i*16+"px"});
					})
					$(".menu-nav2 a").each(function(i){
						$(this).animate({"marginLeft":"50px"},100*i);
					})
					$(".LEY_icon1").css("transform","rotate(0deg)");
					$(".LEY_icon2").css("transform","rotate(0deg)");
				}
				
			})