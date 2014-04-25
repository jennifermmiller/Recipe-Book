console.log('Hi ya!');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

	$(".img-social").hover(function(){
	    $(this).attr("src", function(index, attr){
	        return attr.replace(".png", "-hover.png");
	    });
	}, function(){
	    $(this).attr("src", function(index, attr){
	        return attr.replace("-hover.png", ".png");
	    });
	});

	$(".img-social-diff").hover(function(){
	    $(this).attr("src", function(index, attr){
	        return attr.replace("1.png", "-hover.png");
	    });
	}, function(){
	    $(this).attr("src", function(index, attr){
	        return attr.replace("-hover.png", "1.png");
	    });
	});
});
