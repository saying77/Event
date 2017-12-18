
$(function(){
	
	$("#home button").mouseover(function(){
		$(this).addClass("btn_action").parents().siblings().children().removeClass("btn_action");
	})
	
	$(".small_border").click(function(){
		$('body').animate({"scrollTop":parseInt($("#home").css("height"))});
	})
	
	//人才开发
	$("#personel #main_ul li").mouseover(function(){
		$(this).addClass("li_action").siblings().removeClass("li_action");
		$(this).find(".text").addClass("text_action").parents("li").siblings().find(".text").removeClass("text_action");
	})
	
	
	$(".bottom").click(function(){
		$('body').animate({"scrollTop":0},500);
	})
})