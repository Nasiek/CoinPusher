import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './api_testing.html';

Template.apitesting.onCreated(function apitestingOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

// Template.apitesting.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.apitesting.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
