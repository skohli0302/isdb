App.AppView = Backbone.View.extend({
   el : '#app',
   apptmplt : _.template("Infosprout Application"),
   
   
   render: function(){
       this.$el.html(this.apptmplt(this.model.toJSON()));
       return this; 
   }
});