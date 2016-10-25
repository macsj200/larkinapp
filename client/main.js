import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.socialServiceTemplate.helpers({
	socialServiceResources() {
		return SocialServiceResources.find();
	},
});
