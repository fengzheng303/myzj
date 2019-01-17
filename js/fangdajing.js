		/*function $(id){
				return document.getElementById(id);
			}*/
			var oZoomArea = document.getElementById("detail");
			var oMidArea = document.getElementById("midArea");
			var oMidImg = oMidArea.children[0];
			var oZoom =document.getElementById("zoom");
			var oBigArea = document.getElementById("bigArea");
			var oBigImg = oBigArea.children[0];
			//var oSmallArea = $("smallArea");
			//var aSmallImg = oSmallArea.children;
			
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
			
			
			/*for(var i = 0; i < aSmallImg.length; i++){
				aSmallImg[i].onclick = function(){
					oMidImg.src = this.src;
					oBigImg.src = this.src;
				}
			}*/