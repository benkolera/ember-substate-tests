import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        var out = new Ember.RSVP.Promise( function (o,e) {
            Ember.run.later(function() {
                e("Bad Parent");
            },5000);
        });
        return out;
    }
});
