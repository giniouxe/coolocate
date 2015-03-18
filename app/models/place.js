import DS from 'ember-data';

var Place = DS.Model.extend({
  name: DS.attr('string', {defaultValue: 'Cool japanese resturant'}),
  address: DS.attr('string', {defaultValue: '742 Evergreen Terrace, Springfield'}),
  tags: DS.attr(),
});

Place.reopenClass({
  FIXTURES: [{
    id: 1,
    name: 'Cool beer bar',
    address: 'Brussels',
    tags: ['beer', 'bar', 'cheap'],
  }, {
    id: 2,
    name: 'Cool pizzeria',
    address: 'Napoli',
    tags: ['pizza', 'tomatoes', 'mozarella', 'nice waiter'],
  }
  ]});

export default Place;
