var NavigationView = Backbone.View.extend({
    tagName: 'a',

    createTemplate: _.template($('#navigation-template').text()),

    initialize: function(){ 
        this.setHrefAttr();

        $('.navigation').append(this.el); 

        this.render();
    },

    render: function(){
        this.$el.html(this.createTemplate(this.model));
    },

    setHrefAttr: function(){
        var id = this.model.get('id');
        var link  = '#/recipes/' + id;
        this.$el.attr({href: link})
    }
});