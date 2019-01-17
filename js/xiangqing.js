$(function() {
	$("#fenlei1").hover(function() {
		$("#fenlei1 ul").show();
		$("#fenlei1 ul li div").hide();
		$("#fenlei1 ul li a").hover(function() {
			$("#fenlei1 ul li div").show()
		})
	});
	$("#fenlei1").mouseleave(function() {
		$("#fenlei1 ul").hide();
	});
	/*$(".dong ul li").mouseover(function() {
		$(this).stop().animate({
			"top": "-20px"
		}, 200)
	});
	$(".dong ul li").mouseout(function() {
		$(this).stop().animate({
			"top": "0px"
		}, 200)
	});*/
	
				var id = location.search.split("=")[1];
				$.get("http://47.104.244.134:8080/goodsbyid.do", {
					id: id
				}, function(data) {
					console.log(data);
					str = `<div id="midArea"> 
						<img src="${data.picurl}">
						<div id="zoom"></div>
					</div>
					<p>${data.name}</p>
					<b>促销价 ￥${data.price}</b>
					<input type="button" class="addBtn" value="加入购物车">              
					//<div id="num"><a href="cart.html">0</a></div>
					<div id="bigArea"><img src="${data.picurl}"></div>
					<div id="smallArea">
			<img src="${data.picurl}">
			<img src="${data.picurl}">
			
		</div>`

					$("#detail").html(str);
                    	
			var oZoomArea = document.getElementById("detail");
			var oMidArea = document.getElementById("midArea");
			var oMidImg = oMidArea.children[0];
			var oZoom =document.getElementById("zoom");
			var oBigArea = document.getElementById("bigArea");
			var oBigImg = oBigArea.children[0];
			var oSmallArea = document.getElementById("smallArea");
			var aSmallImg = oSmallArea.children;
			/*var oNum = document.getElementById("num");
			var num = oNum.children[0];
			var aBtns = document.getElementsByClassName("addBtn");*/
			//显示隐藏
			
			oMidArea.onmouseenter = function(){
				oZoom.style.display = "block";
				oBigArea.style.display = "block";
			}
			
			oMidArea.onmouseleave = function(){
				oZoom.style.display = "none";
				oBigArea.style.display = "none";
			}
			
			//控制放大镜的位置
			
			oMidArea.onmousemove = function(e){
				var evt = e || event;
				var _left = evt.pageX - oZoomArea.offsetLeft - oZoom.offsetWidth/2;
				var _top = evt.pageY - oZoomArea.offsetTop - oZoom.offsetHeight/2;
				 
				
				if(_left <= 0){
					_left = 0;
				}
				if(_left>= oMidArea.offsetWidth - oZoom.offsetWidth){
					_left = oMidArea.offsetWidth - oZoom.offsetWidth;
				}
				if(_top <= 0){
					_top = 0;
				}
				if(_top>= oMidArea.offsetHeight - oZoom.offsetHeight){
					_top = oMidArea.offsetHeight - oZoom.offsetHeight;
				}
				
				oZoom.style.left = _left + "px";
				oZoom.style.top = _top + "px";
				
				//控制大图位置
				
				oBigImg.style.left = - _left/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = - _top/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				
			}
			
			
			for(var i = 0; i < aSmallImg.length; i++){
				aSmallImg[i].onclick = function(){
					oMidImg.src = this.src;
					oBigImg.src = this.src;
				}
			}
					$(".addBtn").click(function() {
						var token = $.cookie("token");
						$.get("http://47.104.244.134:8080/cartsave.do", {
							gid: id,
							token: token
						}, function(data) {
							if(data.code == 0) {
								location.href = "cart.html";
							}
						})
					})
				})
			
});
           