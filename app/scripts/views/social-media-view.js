//Display social media buttons on page w/ hover event:
var SocialMediaView = Backbone.View.extend({
	className: 'social-media',

	events: {
		'mouseenter img': 'showHoverState',
		'mouseleave img': 'removeHoverState'
	},

	createTemplate: _.template($('#social-media-template').text()),

	initialize: function(){
		$('.recipe-info').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	},

	showHoverState: function(ev){
		var target = $(ev.currentTarget);
	    $(target).attr('src', function(index, attr){
	        return attr.split('.').join('-hover.');
	    });
	},

	removeHoverState: function(ev){
		target = $(ev.currentTarget);
	    $(target).attr('src', function(index, attr){
	        return attr.split('-hover.').join('.');
	    });
	}
});