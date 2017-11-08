$(document).ready(function(){
	$("#btn_open_menu_lateral").click(function(){
		$("#menu_esquerda").animate({width:'toggle'},200);
	});

	$("#menu_esquerda").mouseleave(function(){
		$("#menu_esquerda").animate({width:'toggle'},200);
	});	
});