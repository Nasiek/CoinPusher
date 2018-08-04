import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './api_testing.html';

Template.apitesting.onCreated(function apitestingOnCreated() {
  // counter starts at 0
  this.apiData = function quarterCall(){
    var client = new Quarters({
        appId: '3IX6wX8uTVHCCVlIv5VQ',
        appKey: 'gk7uoois2hkswzzsy7kb3f8zdnxosmse',
        quartersURL: 'https://pocketfulofquarters.com',
        apiURL: 'https://api.pocketfulofquarters.com/v1/'
      });
  }
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
