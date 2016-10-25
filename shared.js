SocialServiceResources = new Mongo.Collection("SocialServiceResources");

SocialServiceResources.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label:"Name",
	},
	address: {
		type: String,
		label:"Address",
		optional:true,
	},
	primaryImage: {
		type:String,
		defaultValue:"https://placekitten.com/200/300",
		optional:true,
		
	}
}));
