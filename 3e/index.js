/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	

	while (interval >= 60) 
	{
		hours = hours + 1;
		interval = interval - 60;
	}
	while (interval > 0)
	{
		minutes = minutes + interval;
		interval = 0;
	}

	while (Math.floor(minutes) > 59)
	{
		minutes = 60 - minutes;
		hours = hours + 1;
	}
	while (Math.floor(hours) > 23)
	{
		hours = 24 - hours;
		hours = Math.abs(hours);
	}

	if (Math.sign(minutes) <= 0)
	{
		minutes = Math.abs(minutes);
	}
	if (Math.sign(hours) <= 0)
	{
		hours = Math.abs(hours);
	}

	var h = String(hours);

	if (h.length == 1)
	{
		h = "0" + h;
	}

	var m = String(minutes);

	if (m.length == 1)
	{
		m = "0" + m;
	}

	//console.log(h + ":" + m);
	return h + ":" + m;
};
