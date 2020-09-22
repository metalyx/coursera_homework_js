/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {

	var splitString = tweet.split(' ');
	var resultArray = [];

	for (var i = 0; i < splitString.length; i++) 
	{
		if (splitString[i].charAt(0) == "#")
	    {
	    	resultArray.push(splitString[i].slice(1));
	    }
	}

	return resultArray;


};
