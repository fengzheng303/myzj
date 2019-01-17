/*
 参数
 * 请求类型 get post
 * 请求地址 url
 * 成功时的数据处理函数 fnSuc
 * 失败时的处理函数
 * 参数（json对象）
 * */
//、var data = {username:val,password:val}
// username=val&password=val
/*function ajax(type,url,data,fnSuc,fnFail){
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str = "";
	for(var i in data){
		str += i+"="+data[i]+"&";
	}
	//将最后一个&去掉
	str = str.substr(0,str.length-1);
	//将请求方法全部转换为小写，避免使用这个封装函数的人员习惯不同造成的bug
	if(type.toLowerCase()=="get"){
		xhr.open("get",url+"?"+str,true);
		xhr.send();
	}
	if(type.toLowerCase()=="post"){
		xhr.open("post",url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data = xhr.responseText;
				data = JSON.parse(data);
				fnSuc(data);
			}else{
				if(fnFail){
					fnFail();
				}
			}
		}
	}
}*/
/*
 type,url,data,fnSuc,fnFail
 * {
 * 	type:"get",
 *  url:"data.php",
 * 	data:data,
 * 	fnSuc:foo,
 * 	fnFail:bar
 * }
 * 
 * 
 * 
 * */
function ajax(obj){
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str = "";
	for(var i in obj.data){
		str += i+"="+obj.data[i]+"&";
	}
	//将最后一个&去掉
	str = str.substr(0,str.length-1);
	//将请求方法全部转换为小写，避免使用这个封装函数的人员习惯不同造成的bug
	if(obj.type.toLowerCase()=="get"){
		if(obj.data){
			xhr.open("get",obj.url+"?"+str,true);
		}else{
			xhr.open("get",obj.url,true);
		}
		
		xhr.send();
	}
	if(obj.type.toLowerCase()=="post"){
		xhr.open("post",obj.url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data = xhr.responseText;
				data = JSON.parse(data);
				obj.fnSuc(data);
			}else{
				if(obj.fnFail){
					obj.fnFail();
				}
			}
		}
	}
}
