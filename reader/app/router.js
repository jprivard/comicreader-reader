import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list', { path: '/' });
  this.route('book', { path: '/book/:book_id'});
});

export default Router;
