import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        var out = new Ember.RSVP.Promise(function (r) {
            Ember.run.later( function () {
                r("Parent MODEL");
            },5000);
        });
        return out;
    },
    actions: {
        loading() {
            console.log( "Parent loading" );
            return true;
        }
    }
});
