$(function() {
    Backbone.emulateJSON = true;

    // Initialize Backbone views.
//    App.chromeView = new App.ChromeView({el: $("body")});
//    App.router = new App.Router;

    // Initialize the Backbone router.
    Backbone.history.start();
});

