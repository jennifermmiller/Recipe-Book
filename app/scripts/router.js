var MainRouter = Backbone.Router.extend({
	routes: {
		'': 'getRecipes',
		'recipes/:id': 'showRecipe'
	},

	initialize: function(){
		this.recipes = new RecipesCollection();
	},

	getRecipes: function(){
		this.recipes.fetch();
	},

	showRecipe:function(id){
		console.log('here?');
		var recipeId = this.recipes.find(function(recipe){
			console.log('and here?');
			return recipe.get('id') === id;
		});

		new RecipeView({model:recipeId});
	}
});