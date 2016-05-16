// JavaScript Document
var getInterval;
var newInterVal;
var bubbleloader_json = {
	"data":[
		{
			"id":"1",
			"left":"93",
			"top":"0",
			"width":"100",
			"height":"100",
			"background":"#E07300"
		},
		{
			"id":"2",
			"left":"100",
			"top":"125",
			"width":"200",
			"height":"200",
			"background":"#139BB1"
		},
		{
			"id":"3",
			"left":"193",
			"top":"68",
			"width":"300",
			"height":"300",
			"background":"#E07300"
		},
		{
			"id":"4",
			"left":"78",
			"top":"88",
			"width":"50",
			"height":"50",
			"background":"#139BB1"
		},
		{
			"id":"5",
			"left":"50",
			"top":"123",
			"width":"20",
			"height":"20",
			"background":"#E07300"
		},
		{
			"id":"6",
			"left":"400",
			"top":"100",
			"width":"250",
			"height":"250",
			"background":"#139BB1"
		}
	],
	"biopage":[
		{
			"id":"0",
			"left":"482",
			"top":"10"
		},
		{
			"id":"1",
			"left":"63",
			"top":"151"
		},
		{
			"id":"2",
			"left":"-155",
			"top":"-76"
		},
		{
			"id":"3",
			"left":"540",
			"top":"170"
		},
		{
			"id":"4",
			"left":"-165",
			"top":"230"
		}
		
	]
}
function loadassets(){
	$("#header_display").addClass("turn_absolute");
	$("#header_display").fadeIn(500);
	$("#content_display").css("height","0px");
	$("#footer_display").css("margin-top","200px");
	$("#content_display").fadeIn(500);
	$("#content_display").animate({"height":1000},500,function(){
		$("#footer_display").css("margin-top","0px");
	});
	$("#footer_display").fadeIn(500);
	
	$("#header_display").animate({"top":0}, 800, function() {
		$("#logo_menu").addClass("margin_minus")
		$("#logo_menu").fadeIn(500);
		
		$("#logo_menu").animate({"margin-top":0},500,function(){
			$("#logo_menu").removeClass("margin_minus");
			$("#logod_div").css("width","280px");
			$("#logod_div").css("height","240px");
			$("#logod_div img").css("width","280px");
			$("#logod_div img").css("height","240px");
			$("#logod_div").fadeIn(400);
			$("#logod_div").animate({"width":210,"height":136},500)
			$("#logod_div img").animate({"width":210,"height":136},500,function(){
				$("#show0").fadeIn(
					{
						duration:500,
						complete:function(){
							$("#show1").fadeIn({
								duration:500,
								complete:function(){
									$("#show2").fadeIn({
										duration:500,
										complete:function(){
											$("#show3").fadeIn({
												duration:500,
												complete:function(){
													glowtoggle();
													$(".pages").show();
													distrortAboutcircles($("#about_page .circle_links"));
													distrortBioPage($("#bio_page"));
													if ($.browser.msie) {
														alert("some animation are removed due to IE Effect");
													}
													else{
														getInterval = setInterval(function(){
															blinkToggle();
														},200);	
														newInterVal = setInterval(function(){
															blinkchToggle();
														},900);	
													}
												}
											});
										}
									});
								}
							});
						}
					}
				);
				
			});
				jQuery('#logod_div img').rotate({
				angle:-270,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-360, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		});
	});
}

function globalscrollEvent(){
	$( window ).scroll(function() {
		console.log($(this).scrollTop());
		if($(this).scrollTop() > 0 &&  $(this).scrollTop() < 500){
			$("#about_page").find(".bigtext").stop().animate({"margin-left":-200,easing:"easeIn"},500);
			$("#about_page").find(".smalltext").stop().animate({"margin-left":200,easing:"easeIn"},500);
			distortAboutCircleWithAnim($("#about_page .circle_links"));
			distrortBioPage($("#bio_page"));
		}
		if($(this).scrollTop() > 880 &&  $(this).scrollTop() <= 990){
			$("#about_page").find(".bigtext").stop().animate({"margin-left":0,easing:"easeOut"},500);
			$("#about_page").find(".smalltext").stop().animate({"margin-left":0,easing:"easeOut"},500);
			restorAboutCircleWithAnim($("#about_page .circle_links"));
			distrortBioPage($("#bio_page"));
		}
		if($(this).scrollTop() > 1394 &&  $(this).scrollTop() <= 1418){
			restoreBioPage($("#bio_page"),bubbleloader_json);
		}
	})
}

function bubbleloader(parent_element,bubbleloader_json){
	for(var i = 0; i< bubbleloader_json.data.length; i++){
		parent_element.append('<div class="bubbles" id='+bubbleloader_json.data[i].id+' style="left:'+bubbleloader_json.data[i].left+'px;top:'+bubbleloader_json.data[i].top+'px;width:'+bubbleloader_json.data[i].width+'px;height:'+bubbleloader_json.data[i].height+'px;background:'+bubbleloader_json.data[i].background+';"></div>');
	}
	/*parent_element.find("bubbles").each(function(i){
		$(this).width(0);
		$(this).animate({width:bubbleloader_json.data[i].width},i*100,function(){
			
		})
	})*/
}

function clickablelinks(element){

		$(element).click(function(){	
			var getpageID = $(this).attr("href");
			if(getpageID == "#home_page"){
				$('html, body').animate({scrollTop:"0"}, '500');	
			}
			else{
				$('html, body').animate({scrollTop:$(getpageID).offset().top-200}, '500');
			}
			return false;	
		})
	
}

function glowtoggle(){
	$("#gloaw_div").fadeIn({
		duration:500
	})
}
function glowfadeout(){
	$("#gloaw_div").fadeOut({
		duration:500
	})
}
function blinkToggle(){
	$("#gloaw_div").animate({opacity:0.7},200,function(){
		$("#gloaw_div").animate({opacity:1},200);
	})
}
function blinkchToggle(){
	$("#chglow").fadeIn();
	$("#chglow").animate({opacity:0},900,function(){
		$("#chglow").animate({opacity:1},900);
	})
}
function aboutRolloverHandler(element){
	console.log(element);
	element.each(function(){
		$(this).mouseenter(function(){
			$(this).find('.tag_labels').addClass("orng_color");
			$(this).find("img.img_bw").css("display","none");
			$(this).find("img.img_clr").css("display","block");
		})
		$(this).mouseleave(function(){
			$(this).find('.tag_labels').removeClass("orng_color");
			$(this).find("img.img_bw").css("display","block");
			$(this).find("img.img_clr").css("display","none");
		})
	})
}

function distrortBioPage(element){
	element.find(".bio_elements").each(function(i){
		$(this).hide();
		//$(this).css("left","330px");
		//$(this).css("top",0);
		$("#bio_page .my_bio_pic").stop().animate({"left":"900px","top":0,easing:"easeOut"},50);
		$("div#bio_page div.page_content .title_bio").stop().animate({"left":"-900px","top":0,easing:"easeIn"},50);
		$("#bio_page .my_bio_pic").hide();
		$("div#bio_page div.page_content .title_bio").hide();
		$(this).stop().animate({"left":"330px","top":0,easing:"easeOut"},i * 50); 
	})
}
function restoreBioPage(element,jsonobj){
	$("div#bio_page div.page_content .title_bio").fadeIn(50,function(){
		$("div#bio_page div.page_content .title_bio").stop().animate({"left":"78px","top":0,easing:"easeOut"},500,function(){
			$("#bio_page .my_bio_pic").fadeIn(50,function(){
				$("#bio_page .my_bio_pic").stop().animate({"left":"516px","top":0,easing:"easeOut"},500,function(){
					element.find(".bio_elements").each(function(i){
						$(this).fadeIn(i*500,function(){
							$(this).stop().animate({"left":parseInt(jsonobj.biopage[i].left),"top":parseInt(jsonobj.biopage[i].top),easing:"easeOut"},i * 200); 
							//$(this).animate({"top":parseInt(jsonobj.biopage[i].top),easing:"easeIn"},i * 500); 
						});
					})
				});
			})
		});
	})
	
}
function distrortAboutcircles(element){
	element.each(function(i){
		if($(this).hasClass("circlelink1") == true){
			jQuery(this).rotate({
				angle:-360,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-270, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
		if($(this).hasClass("circlelink2") == true){
			$(this).css("left","900px");
			jQuery(this).rotate({
				angle:-360,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-270, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
		if($(this).hasClass("circlelinkdefault") == true){
			$(this).css("left","-900px");
			jQuery(this).rotate({
				angle:-360,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-270, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}		
	})
}

function restorAboutCircleWithAnim(element){
	element.each(function(i){
		if($(this).hasClass("circlelink1") == true){
			jQuery(this).rotate({
				angle:-270,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-360, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
		if($(this).hasClass("circlelink2") == true){
			$(this).stop().animate({"left":'363px',easing:"easeIn"},500);
			jQuery(this).rotate({
				angle:-270,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-360, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
		if($(this).hasClass("circlelinkdefault") == true){
			$(this).stop().animate({"left":'0px',easing:"easeIn"},500);
			jQuery(this).rotate({
				angle:-270,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-360, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
	})
}
function distortAboutCircleWithAnim(element){
	element.each(function(i){
		if($(this).hasClass("circlelink1") == true){
			jQuery(this).rotate({
				angle:-360,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-270, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
		if($(this).hasClass("circlelink2") == true){
			$(this).stop().animate({"left":'900px',easing:"easeIn"},500);
			jQuery(this).rotate({
				angle:-360,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-270, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
		if($(this).hasClass("circlelinkdefault") == true){
			$(this).stop().animate({"left":'-900px',easing:"easeIn"},500);
			jQuery(this).rotate({
				angle:-360,            // reset rotation angle to 0 where to start the rotation
				// rotate 360 degrees (counter clockwise), in 3 secconds
				animateTo:-270, 
				duration: 500,
				// auto-call the function after rotation, to rotate again and again
				callback: 0,
				// add easing to make animation look more natural
				// t: current time, b: begInnIng value, c: change In value, d: duration
				easing: function (x,t,b,c,d){
				  return c*(t/d)+b;       // linear easing
				}
		   	});
		}
	})
}