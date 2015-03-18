import Ember from 'ember';

export default Ember.ArrayController.extend({
  filter: "",
  sortAscending: true,

  filteredModel: function(){
    var filter = this.get('filter');

    return this.get('content').filter(function(item){
        if (item.get('name') === undefined){
          return true;
        }
        return item.get('name').toLowerCase().match(new RegExp(filter.toLowerCase()));
    }).sort(function(a, b){
      return this.get('sortAscending') ? (b.get('name') < a.get('name')) : (b.get('name') > a.get('name'));
    }.bind(this));
  }.property('filter', 'sortAscending', 'model.@each.name'),

  actions: {
    sort: function() {
      this.toggleProperty('sortAscending');
    }
  }
});
