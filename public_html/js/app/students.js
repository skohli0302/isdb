/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
App.Students = Backbone.Collection.extend({
    model : App.Student,
    
    //saving data in local storage
    localStorage : new Backbone.LocalStorage('infosprout'),
});


