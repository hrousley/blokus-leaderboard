import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({
	todaysDate: computed(function() {
		var d = new Date(),
			month = '' + (d.getMonth()+1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) { month = '0' + month; }
		if (day.length < 2) { day = '0' + day; }

		return [year, month, day].join('-');
	})
});