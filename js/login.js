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
				
				
				/*$('#sub').click(function(){
					var formData = {
						name: $("#txt1").val(),
						password: $('#psw1').val()
					}
					console.log(formData)
					$.ajax({
						type:"post",
						url:"http://47.104.244.134:8080/userlogin.do",
						data: formData,
						async:true,
						success: function(data){
							console.log(data)
						}
					});
				})*/
				
			})