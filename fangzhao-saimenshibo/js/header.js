

$(document).ready(function(){
	//获取可视窗口的高度
	var height = document.documentElement.clientHeight;
    console.log(1)
    $(".LEY_index1").css("height",height+"px");
    var timer=null;
	//轮播事件
	//var index=-1;
	function move(index){
		$(".LEY_imgbox li").eq(index).removeClass("outzindex");
		$(".LEY_imgbox li").eq(index+1).removeClass("showzindex");
		//黑色透明背景框与轮播图绑定
		$(".LEY_carousel li").eq(index).animate({"paddingLeft":"90px"},1000,function(){
			
		});
		$(".LEY_carousel li").each(function(){
				$(this).css("display","none");
			})
		for(var i=0;i<$(".LEY_btn li").length;i++){
			$(".LEY_btn li").eq(i).removeClass("active");
			$(".LEY_btn li").eq(i).css("height","2px");
			//$(".LEY_carousel li").eq(i).css("display","none");
			
		}
		index++;
		if(index>=$(".LEY_imgbox li").length-1){
			index=-1;
		}
		$(".LEY_imgbox li").eq(index).addClass("outzindex");
		$(".LEY_carousel li").eq(index+1).css("display","block");
		$(".LEY_carousel li").eq(index+1).animate({"paddingLeft":"36px"});
		$(".LEY_carousel li").eq(index+1).css("display","block");
		$(".LEY_imgbox li").eq(index+1).addClass("showzindex");
		$(".LEY_btn li").eq(index+1).addClass("active");
		$(".LEY_btn li").eq(index+1).animate({"height":"8px"},800)
		$(".LEY_imgbox li").eq(index).animate({"width":"0px"},800,function(){		
			$(this).siblings().css("width",'100%');	
		});
	}
	//定时轮播事件
	var i=-1;
	$(".LEY_btn li").on("click",function(){
		var index = $(this).index()-2;
		console.log(index);
		move(index);
		i=index+1;
	})
	timer=setInterval(function(){
		if(i>=$(".LEY_imgbox li").length-1){
			i=-1;
		}
		move(i);
		i++;
	},3000);
	//点击轮播事件
	$(".LEY_btn li").mousemove(function(){
		clearInterval(timer);
		
	})
	$(".LEY_btn li").mouseout(function(){
		  console.log(1);
	      timer=setInterval(function(){
	        	if(i>=$(".LEY_imgbox li").length-1){
			     i=-1;
		        }
		        move(i);
		        i++;
	        },3000);
	})
	
	//点击停止轮播
	var flag=true;
	$(".LEY_head_box .fot_btn .btn").on("click",function(){
		if(flag==true){
			$(this).addClass("bg");
			flag=false;
			clearInterval(timer);
		}else{
			$(this).removeClass("bg");
	        timer=setInterval(function(){
	        	if(i>=$(".LEY_imgbox li").length-1){
			     i=-1;
		        }
		        move(i);
		        i++;
	        },3000);
			flag=true;
		}	
	})
	
	
})
