import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('parent', function() {
    this.route('sub');
    this.route('badsub');
  });
  this.route('badparent', function() {
  });
});

export default Router;
