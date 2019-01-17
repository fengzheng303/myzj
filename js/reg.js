/*$(function(){
	$('#sub').click(function(){
		var formData = {
			username: $("#txt1").val(),
			password: $('#psw11').val()
		}
		console.log(formData)
		$.ajax({
			type:"post",
			url:"http://47.104.244.134:8080/usersave.do",
			data: formData,
			async:true,
			success: function(data){
				console.log(data)
			}
		});
	})
})*/
$(function() {
	$("#txt1").blur(function() {
		var val = $(this).val();
		//http://47.104.244.134:8080/
		$.get("http://47.104.244.134:8080/username.do", {
			username: val
		}, function(data) {
			if(data.code == 0) {
				console.log("用户名已被占用");
			}
		})
	});
	$("#psw22").blur(function() {
		var val = $(this).val();
		//http://47.104.244.134:8080/
		$.get("http://47.104.244.134:8080/useremail.do", {
			email: val
		}, function(data) {
			if(data.code == 0) {
				console.log("邮箱已被占用");
			}
		})
	});

	$("#sub").click(function() {
		$.post("http://47.104.244.134:8080/usersave.do", {
			username: $("#txt1").val(),
			password: $("#psw11").val(),
			email: $("#psw22").val(),
			sex: $("#txt2").val()
		}, function(data) {
         
		})
		
	})
})