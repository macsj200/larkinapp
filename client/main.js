import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';


import './main.html';


Meteor.call('yelpSearch', (err, res) => {
	Session.set("yelpSearchResults", JSON.parse(res).businesses);
});

Meteor.call('larkinServicesSearch', (err, res) => {
	Session.set("larkinServicesSearchResults", JSON.parse(res).Resources);
});



Template.socialServiceTemplate.helpers({
	socialServiceResources() {
		let larkinServicesSearchResults = Session.get("larkinServicesSearchResults");
		let yelpSearchResults = Session.get("yelpSearchResults");
		let results = larkinServicesSearchResults.concat(yelpSearchResults);
		return results;
	},
});
