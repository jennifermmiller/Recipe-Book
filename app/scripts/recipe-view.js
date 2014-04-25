var RecipeView = Backbone.View.extend({
	createTemplate: _.template($('#recipe-template').text()),

	initialize: function(){	
		$('.recipe-info').html(this.el); 

		this.render();

		var ingredArray = this.model.get('ingredients');

		_.each(ingredArray, function(ingredient){
			console.log(ingredient);
			$('.ingredients ul').append('<li>'+ingredient+'</li>');
		});
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	},
});