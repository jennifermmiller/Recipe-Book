//Display selected recipe
var RecipeView = Backbone.View.extend({
	createTemplate: _.template($('#recipe-template').text()),

	initialize: function(){	
		$('.recipe-info').html(this.el); 

		this.render();

		//Pull ingredients from nested array:
		var ingredientArray = this.model.get('ingredients');
		_.each(ingredientArray, function(ingredient){
			$('.ingredients ul').append('<li>'+ingredient+'</li>');
		});
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model));
	}
});