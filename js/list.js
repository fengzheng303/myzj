$(function(){
				$("#shouji").mouseover(function(){
					$("#shouji i img").fadeIn()
				});
				$("#shouji").mouseout(function(){
					$("#shouji i img").fadeOut()
				});
				$("#xiala1").mouseover(function(){
					$("#xiala1 .dingdan3").show().hover(function(){
						$("#xiala1 .dingdan3").css({"color":"orange"})
					});
					$("#xiala111").css({"color":"orange"})
				});
				$("#xiala1").mouseout(function(){
					$("#xiala1 .dingdan3").hide();
					$("#xiala111").css({"color":"#666"})
				});
				$("#xiala2").mouseover(function(){
					$("#xiala2 .dingdan3").show();
					$("#xiala222").css({"color":"orange"})
				});
				$("#xiala2").mouseout(function(){
					$("#xiala2 .dingdan3").hide();
					$("#xiala222").css({"color":"#666"})
				});
				$("#xiala3").mouseover(function(){
					$("#xiala3 .dingdan3").show();
					$("#xiala333").css({"color":"orange"})
				});
				$("#xiala3").mouseout(function(){
					$("#xiala3 .dingdan3").hide();
					$("#xiala333").css({"color":"#666"})
				});
				$("#fenlei1").hover(function(){
					$("#fenlei1 ul").show();
					$("#fenlei1 ul li div").hide();
					$("#fenlei1 ul li a").hover(function(){
						$("#fenlei1 ul li div").show()
					})
				});
				$("#fenlei1").mouseleave(function(){
					$("#fenlei1 ul").hide();
				});
				$("#prodList li").mouseover(function(){
					$(this).css({"width":"300px","height":"500px"})
				});
				
				$("#prodList li").mouseout(function(){
					$(this).css({"width":"158px","height":"400px"})
				});
})