"use strcit"


window.onload= function(){
	var getElement = function(el){
		return document.getElementById(el)
	}
	setTimeout(function(){
		var flag = true; //防止滚动重复加载

		var svgBg = document.getElementById('svg-bg'); //svg背景

		var svg = document.getElementById('svg'); //之前的svg动画

		var newSvg = svg.cloneNode(true); //克隆后新的svg动画

		svgBg.removeChild(svg)

		if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

		} else {
			window.onscroll = function() {
				var scrollTop = window.scrollY
				if (scrollTop >= 650 && flag) {
					svgBg.appendChild(newSvg);
					flag = false;
					setInterval(function() {
						var newSvg = svg.cloneNode(true); //克隆后新的svg动画
						svgBg.removeChild(document.getElementById('svg'))
						setTimeout(function() {

							svgBg.appendChild(newSvg);
						}, 2000)
					}, 27000)
				}
			}
		}

		var t= 0 ;
		t1 = t+1000;
		t_all = t1+3000
		getElement('first-cont').onclick = function(){
			console.log('move')
			Velocity(document.getElementById("first-finger"),
			 {
				 opacity:0
			},{
				duration:1000
			});
			Velocity(document.getElementById("first-click"),
			 {
				 opacity: 0
			},{
				duration:1000
			});




			Velocity(document.getElementById("move-pic"),
			 {
				zIndex:10
			},{
				duration:0
			});
			Velocity(document.getElementById("move-pic"), {
			    opacity: 1
			}, {
			    duration: t1
			});
			Velocity(document.getElementById("move-pic"),
			 {
				left:640
			},{
				duration:t_all,
				easing: "linear"
			});

		}
	},100)
 	
};