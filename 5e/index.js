/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
for(var i = 0; i < hashtags.length; i++)
	{
		hashtags[i] = hashtags[i].toLowerCase();
	}
    
function uniqueVal(value, index, self) { 
    return self.indexOf(value) === index;
}
	var resArray = hashtags.filter( uniqueVal);
	var resString = resArray.join(', ');
	return resString;

};
