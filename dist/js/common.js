function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn);
	}else{
		obj.attachEvent("on"+type,fn);
	}
}
			
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn);
	}else{
		obj.detachEvent("on"+type,fn);
	}
}
function setCookie(name,value,n){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+n);
	document.cookie = name+"="+value+";expires="+oDate;
}
function getCookie(name){
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++){
		//console.log(arr[i]);
		var arr1 = arr[i].split("=");
		if(arr1[0]==name){
			return arr1[1];
		}
	}
}
function removeCookie(name){
	setCookie(name,1,-1);
}
			