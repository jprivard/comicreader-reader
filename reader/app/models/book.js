import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    author: DS.attr('string'),
    thumbnail: DS.attr('string'),
    description: DS.attr('string')
});
