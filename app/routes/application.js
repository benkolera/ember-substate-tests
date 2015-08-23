import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        var out = new Ember.RSVP.Promise(function (cb){
            Ember.run.later(function () { cb("App model") }, 2000 );
        });
        return out;
    },
    actions: {
        loading() {
            console.log( "Application loading" );
            return true;
        }
    }
});
