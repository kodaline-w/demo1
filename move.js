function move(obj,json,fnEnd){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			for(var att in json){
					var cur=0;
				if (att=='opacity') {
					cur=Math.round(parseFloat(getStyle(obj,att))*100)
				} else {
					cur=parseInt(getStyle(obj,att))
				}
				var speed=(json[att]-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if (json[att]==cur) {
					clearInterval(obj.timer);
					if(fnEnd) fnEnd();
				} else {
					if (att=='opacity') {
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100
					} else {
						obj.style[att]=cur+speed+'px';

					}
					
				}
			}		
		},30)
	}
	function getStyle(obj,name){
		if (obj.currentStyle) {
			return obj.currentStyle[name]
		} else {
			return getComputedStyle(obj,false)[name]
		}
	}