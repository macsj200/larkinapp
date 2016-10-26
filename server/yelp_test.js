import yelp from "node-yelp-api"; 
const yelpSearchFiber = Meteor.wrapAsync(yelp.search);

Meteor.methods({
	yelpSearch(){
		const res = yelpSearchFiber({
			"consumer_key": Meteor.settings.public.consumer_key,
			"consumer_secret": Meteor.settings.private.consumer_secret,
			"token": Meteor.settings.public.token,
			"token_secret": Meteor.settings.private.token_secret,
			"location":"San Francisco"
		});

		return res.body;
	},
	larkinServicesSearch(){
		return Assets.getText("LarkinServices.json");
	}
});
