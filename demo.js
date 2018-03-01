"use strcit"


window.onload= function(){
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
	},100)
 	
};