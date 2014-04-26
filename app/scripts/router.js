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
		//Find correct recipe
		var recipeId = this.recipes.find(function(recipe){
			return recipe.get('id') === id;
		});

		//Page Transition
		$('.recipe-info').fadeOut('slow', function() {
			new RecipeView({model:recipeId});
			new SocialMediaView();
			setTimeout(function() {
				$('.recipe-info').fadeIn('slow');
			}, 1000);
		});
    }
});
