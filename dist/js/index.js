$(function() {
	$(window).scroll(function() {
		//显示隐藏
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= 20) {
			$("#xuanfu").fadeIn();
		} else {
			$("#xuanfu").fadeOut();
		}
	});
	//回到顶部
	$("#cart5").click(function() {
		flag = false;
		$("body,html").stop().animate({
			"scrollTop": 0
		}, 1000, function() {
			flag = true;
		});
	});
	//显示隐藏框
	$("#cart").mouseover(function() {
		$("#yikuang").show()
	});
	$("#cart").mouseout(function() {
		$("#yikuang").hide()
	});
	$("#cart3").mouseover(function() {
		$("#erkuang").show()
	});
	$("#cart3").mouseout(function() {
		$("#erkuang").hide()
	});
	$("#cart5").mouseover(function() {
		$("#sankuang").show()
	});
	$("#cart5").mouseout(function() {
		$("#sankuang").hide()
	});
	$("#tangmei").mouseover(function() {
		$("#zuo1 span").show().eq(0).click(function() {
			$("#tangmei1").fadeIn().animate({
				'left': '300px'
			}, 500)
		});
		$("#zuo1 span").show().eq(1).click(function() {
			$("#tangmei1").fadeIn().animate({
				'right': '300px'
			}, 500)
		})
	});
	$("#tangmei").mouseout(function() {
		$("#zuo1 span").hide()
	})
});

//轮播图
var oBanner = document.getElementById("scrollBanner");
var oList = document.getElementById("scollList");
var aLi = oList.children;
var len = aLi.length;
var perWidth = aLi[0].offsetWidth;

oList.style.width = len * perWidth + "px";
//角标
var oNums = document.getElementById("nums");
var aNums = oNums.children;
aNums[0].className = "hover";
var i = 0;

var timer = setInterval(function() {
	move();
}, 3000)

function move() {
	i++;
	if(i == len) {
		oList.style.left = 0;
		i = 1;
	}
	if(i == -1) {
		oList.style.left = -perWidth * (len - 1) + "px";
		i = len - 2;
	}
	for(var j = 0; j < aNums.length; j++) {
		aNums[j].className = "";
	}
	if(i == len - 1) {
		aNums[0].className = "hover";
	} else {
		aNums[i].className = "hover";
	}
	startMove(oList, {
		"left": -perWidth * i
	});
}
//
oBanner.onmouseover = function() {
	clearInterval(timer);
}
oBanner.onmouseout = function() {
	timer = setInterval(move, 3000);
}
//鼠标移入角标 切换图片
for(let k = 0; k < aNums.length; k++) {
	aNums[k].onmouseover = function() {
		i = k - 1;
		move();
	}
}