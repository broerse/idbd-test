import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('authors', function() {
		this.resource('author', { path: ':author_id' });
	});
});

export default Router;
