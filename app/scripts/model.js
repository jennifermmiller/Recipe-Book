var Recipe = Backbone.Model.extend({});

var RecipesCollection = Backbone.Collection.extend({
	model: Recipe,

	url: "/../pages.json",

	parse: function(result){
		return result.pages;
	},

	initialize: function(){
		this.on('add', function(recipeType){
			new NavigationView({model:recipeType});
		});
	}
});