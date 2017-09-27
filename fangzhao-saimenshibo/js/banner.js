$(document).ready(function(){
	//获取可视区域的高度
	var height = document.documentElement.clientHeight;
	var hmax = $('.LEY_footer_box').height();
	$(".LEY_index2").height(height)
    $(".LEY_index2 .LEY_pageleft .page-txt").height(height);
    $(".LEY_index2 .LEY_pageright .page-video").height(height);
    $(".LEY_line_box").height(height-100);
    var nowPage=0;
    console.log(nowPage);
    //初始化数字下标
    $(".page-icon-number .bot_line").each(function(i){
    	
    	$(this).css("display","none");
    })
    $(".LEY_pageright").mousewheel(function(event,delta){
    	//滚轮下滑
    	 clearTimeout($.data(this, 'timer'));
		 $.data(this, 'timer', setTimeout(function(){
		 	
				console.log("delta="+delta);
		    	nowPage=nowPage-delta;
		    	console.log(nowPage);
		    	if(nowPage>4&&delta<0){
		    		nowPage=4;
		    		$(".LEY_left_txt").animate({"marginTop":-318+"px"},800,function(){
		    			$(".LEY_left_txt").css("display","none"); 
		    		})
		    		
		    		$(".LEY_main").animate({"top":-height*2+(height-hmax)+"px"},600);
		    		$(".LEY_right_txt").animate({"bottom":"-66px"},600);
		    		$(".LEY_nav_box").animate({"bottom":"-66px"},600);
		    		$(".LEY_logo_box").animate({"bottom":"-66px"},600);
		    	}

		    	//视频播放
		        if(nowPage==2){
		        	$("video").eq(1).get(0).play();
		        }
		        if(nowPage==0){
		        	$("video").eq(0).get(0).play();
		        }

		    	if(nowPage>=3&&delta>0){
		            nowpage=5;
		    		$(".LEY_main").animate({"top":-height+"px"},600);
		     		$(".LEY_left_txt").css("display","block"); 
		     		$(".LEY_left_txt").animate({"marginTop":"0px"},800); 
		     		$(".LEY_right_txt").animate({"bottom":"0"},600);
		    		$(".LEY_nav_box").animate({"bottom":"0"},600);
		    		$(".LEY_logo_box").stop().animate({"bottom":"0px"},600);
		    	}
		    	console.log(nowPage);
		    	if(nowPage<0&&delta>0){
		    		$(".LEY_main").animate({
								"top": 0 + "px"
					}, 600);
					$(".LEY_number").css("display","none");
					$(".LEY_carousel").css("display","block");
					$(".LEY_left_txt").animate({"width":"580px","height":"230px","left":"4%","top":"35.8%"},1000);
					//为了让第一次也出现
					$(".txt-box .txt_desc").eq(0).find(".page-icon-number .bot_line").eq(0).css("display","block");	
					$(".LEY_right_txt").animate({"height":height+"px"},800);
					
					$(".LEY_nav_box .LEY_move").animate({"height":"110px"},800);
					$(".LEY_right_txt .LEY_icon").css("background","#000");
					$(".LEY_move .know-me").css("display","block");
					$(".LEY_move .nav").css("display","none");
					$(".LEY_logo_box").stop().animate({"width":"0px"},600);
					$(".LEY_right_txt").removeClass("addbg");
					
		    	}else{
		    	
		    	$(".txt-box .txt_desc").eq(nowPage).find(".page-icon-number .bot_line").eq(nowPage).css("display","block");	
		    	$(this).animate({"marginTop":-height*nowPage+"px"},800);
		    	$(".LEY_pageleft").animate({"marginTop":-height*nowPage+"px"},800)
		        $(".LEY_pageright").animate({"marginTop":-height*nowPage+"px"},1000)
		        $(".number-box").animate({"marginTop":-318*nowPage+"px"},600);
		        $(".LEY_txt .txt-box").animate({"marginTop":-318*nowPage+"px"},800);
		        $(".LEY_pageleft").animate({"marginTop":-height*nowPage+"px"},800);
		    	}
		   
		 }, 250));
    	
    })
    $(".LEY_pageleft").mousewheel(function(event,delta){
    	  clearTimeout($.data(this, 'timer'));
		  $.data(this, 'timer', setTimeout(function() {
		     
				console.log("delta="+delta);
		    	nowPage=nowPage-delta;
		    	console.log(nowPage);
		    	if(nowPage>4&&delta<0){
		    		nowPage=4;
		    		$(".LEY_left_txt").animate({"marginTop":-318+"px"},800,function(){
		    			$(".LEY_left_txt").css("display","none"); 
		    		})
		    		 		
		    		$(".LEY_main").animate({"top":-height*2+(height-hmax)+"px"},600);
		    		$(".LEY_right_txt").animate({"bottom":"-66px"},600);
		    		$(".LEY_nav_box").animate({"bottom":"-66px"},600);
		    		$(".LEY_logo_box").stop().animate({"bottom":"-66px"},600);
		    	}
		        //视频播放
		        if(nowPage==2){
		        	$("video").eq(1).get(0).play();
		        }
		        if(nowPage==0){
		        	$("video").eq(0).get(0).play();
		        }
		    	if(nowPage>=3&&delta>0){
		            nowpage=5;
		    		$(".LEY_main").animate({"top":-height+"px"},600);
		     		$(".LEY_left_txt").css("display","block"); 
		     		$(".LEY_left_txt").animate({"marginTop":"0px"},800); 
		     		$(".LEY_right_txt").animate({"bottom":"0"},600);
		    		$(".LEY_nav_box").animate({"bottom":"0"},600);
		    		$(".LEY_logo_box").stop().animate({"bottom":"0px"},600);
		    	}
		    	console.log(nowPage);
		    	if(nowPage<0&&delta>0){
		    		$(".LEY_main").animate({
								"top": 0 + "px"
					}, 600);
					$(".LEY_number").css("display","none");
					$(".LEY_carousel").css("display","block");
					$(".LEY_left_txt").animate({"width":"580px","height":"230px","left":"4%","top":"35.8%"},1000);
					//为了让第一次也出现
					$(".txt-box .txt_desc").eq(0).find(".page-icon-number .bot_line").eq(0).css("display","block");	
					$(".LEY_right_txt").animate({"height":height+"px"},800);
					
					$(".LEY_nav_box .LEY_move").animate({"height":"110px"},800);
					$(".LEY_right_txt .LEY_icon").css("background","#000");
					$(".LEY_move .know-me").css("display","block");
					$(".LEY_move .nav").css("display","none");
					$(".LEY_logo_box").stop().animate({"width":"0px"},600);
					$(".LEY_right_txt").removeClass("addbg");
					
		    	}else{
		    	
		    	$(".txt-box .txt_desc").eq(nowPage).find(".page-icon-number .bot_line").eq(nowPage).css("display","block");	
		    	$(this).animate({"marginTop":-height*nowPage+"px"},800);
		    	$(".LEY_pageleft").animate({"marginTop":-height*nowPage+"px"},800)
		        $(".LEY_pageright").animate({"marginTop":-height*nowPage+"px"},1000)
		        $(".number-box").animate({"marginTop":-318*nowPage+"px"},600);
		        $(".LEY_txt .txt-box").animate({"marginTop":-318*nowPage+"px"},800);
		        
		    	}
		        
		     
		  }, 250));
    	
    })
    //点击page向下运动
    function pageadd(){
    	
    	nowPage++;
    	if(nowPage>4){
    		nowPage=4;
    		$(".LEY_left_txt").animate({"marginTop":-318+"px"},800,function(){
    			$(".LEY_left_txt").css("display","none"); 
    		})
    		 		
    		$(".LEY_main").animate({"top":-height*2+(height-hmax)+"px"},600);
    		$(".LEY_right_txt").animate({"bottom":"-66px"},600);
    		$(".LEY_nav_box").animate({"bottom":"-66px"},600);
    		$(".LEY_logo_box").animate({"bottom":"-66px"},600);
    	}
    	//视频播放
		        if(nowPage==2){
		        	$("video").eq(1).get(0).play();
		        }
		        if(nowPage==0){
		        	$("video").eq(0).get(0).play();
		        }
    	$(".txt-box .txt_desc").eq(nowPage).find(".page-icon-number .bot_line").eq(nowPage).css("display","block");	
    	$(".LEY_pageleft").animate({"marginTop":-height*nowPage+"px"},800);
        $(".LEY_pageright").animate({"marginTop":-height*nowPage+"px"},1000)
        $(".number-box").animate({"marginTop":-318*nowPage+"px"},600);
        $(".LEY_txt .txt-box").animate({"marginTop":-318*nowPage+"px"},800);
    }
    $(".linebot .button_bottom").on("click",function(){
    	pageadd();
    })
    function increase(){
    	
    }
    $(".LEY_mouse").on("click",function(){
    	pageadd();
    });
    $(".linebot .button_top").on("click",function(){
    	nowPage--;
    	if(nowPage<0){
    		nowPage=0;
    		$(".LEY_main").animate({"top": 0 + "px"}, 600);
			$(".LEY_number").css("display","none");
			$(".LEY_carousel").css("display","block");
			$(".LEY_left_txt").animate({"width":"580px","height":"230px","left":"4%","top":"35.8%"},1000);
			//为了让第一次也出现
			$(".txt-box .txt_desc").eq(0).find(".page-icon-number .bot_line").eq(0).css("display","block");	
			$(".LEY_right_txt").animate({"height":height+"px"},800);
			
			$(".LEY_nav_box .LEY_move").animate({"height":"110px"},800);
			$(".LEY_right_txt .LEY_icon").css("background","#000");
			$(".LEY_move .know-me").css("display","block");
			$(".LEY_move .nav").css("display","none");
			$(".LEY_logo_box").stop().animate({"width":"0px"},600);
			$(".LEY_right_txt").removeClass("addbg");
    	}
    	//视频播放
		if(nowPage==2){
		   $("video").eq(1).get(0).play();
		}
		if(nowPage==0){
		   $("video").eq(0).get(0).play();
		}
    	if(nowPage>=3){
    		console.log("赏花");
            nowpage=5;
    		$(".LEY_main").animate({"top":-height+"px"},600);
     		$(".LEY_left_txt").css("display","block"); 
     		$(".LEY_left_txt").animate({"marginTop":"0px"},800); 
     		$(".LEY_right_txt").animate({"bottom":"0"},800);
    		$(".LEY_nav_box").animate({"bottom":"0"},800);
    		$(".LEY_logo_box").animate({"bottom":"0px"},800);
    	}else{
    		$(".txt-box .txt_desc").eq(nowPage).find(".page-icon-number .bot_line").eq(nowPage).css("display","block");	
    	    $(".LEY_pageleft").animate({"marginTop":-height*nowPage+"px"},800);
           $(".LEY_pageright").animate({"marginTop":-height*nowPage+"px"},1000)
           $(".number-box").animate({"marginTop":-318*nowPage+"px"},600);
           $(".LEY_txt .txt-box").animate({"marginTop":-318*nowPage+"px"},800);
    	}
    	
    })
    
    //按钮重合事件
    $(".LEY_line_box .linebot .btn").hover(function(){
    	$(this).children(".aw1").animate({"left":"16px"},500);
    	$(this).css("background","rgba(0,0,0,0.9)");
    },function(){
    	$(this).children(".aw1").animate({"left":"10px"},500);
    	$(this).css("background","#fff");
    })
    
   //照片闪光事件
   var picindex=-1;
   var intimer=null;
   function over(){
   	  	 $(".rotmove .pic").each(function(i){
   	  	 $(this).css("display","none");
   	    })
   	  picindex++;
   	  if(picindex>$(".rotmove .pic").length-1){
   	  	picindex=0;
   	  } 
   	  $(".rotmove .pic").eq(picindex).css("display","block");
//   $(".rotmove .pic").eq(picindex).on("mouseout",function(){
// 	  	  intimer=null;
// 	  	  intimer=setInterval(function(){
// 	  	  	over();
// 	  	  },100);
// 	  })
   	  	
   	  }
     intimer = setInterval(function(){
   	  over();
   	 
     },100);
     $(".rotmove .pic").each(function(index){
     	 $(this).on("mouseover",function(){
     	 	clearInterval(intimer);
     	 })
     	 $(this).on("mouseout",function(){
     	 	 intimer = null;
     	 	intimer = setInterval(function(){
     	 		over();
     	 	},100)
     	 })
     })
     //轮播
     var indexw=-1;
     var scrolltimer = null;
     scrolltimer = setInterval(function(){
     	indexw++;
     	if(indexw>$(".img-ul .img").length-1){
     		indexw = 0;
     	}
     	var width = $(".img-ul .img").width();
     	$('.img-ul').animate({"marginLeft":-width*indexw+'px'},1000);
     	$(".LEY_c_btn li").eq(indexw).addClass("btnactive").siblings().removeClass("btnactive");
     	
     },2000)  
     //点击事件
     $(".LEY_c_btn li").on("mousemove",function(){
     	 
     })
     var h = document.documentElement.clientHeight;
     $(".LEY_mouse").css("top",h-150+"px");
     $(".LEY_mouse").css("left",90+"px");
     //鼠标晃动
     setInterval(function(){
     	$(".LEY_mouse").animate({"top":h-130+"px"},"easieEaseInQuint",function(){
     		$(this).stop().animate({"top":h-150+"px"},"easieEaseInQuint");
     	})
     },1000)
})