var phoneBook = {};

/**

* @param {String} command

* @returns {*} - результат зависит от команды

*/

module.exports = function (command) {

let k = command.split(' ')[0];

switch(k){

case 'ADD':

let name = command.split(' ')[1],

phones = command.split(' ')[2];

return addPhone(name,phones);

case 'SHOW':

return showPhone();

case 'REMOVE_PHONE':

let nameRemove = command.split(' ')[1];

return remove_phone(nameRemove);

}

};

function addPhone(name, phones) {

let arrayPhone = phones.split(','),

numbersPhone;

if (phoneBook.hasOwnProperty(name)) {

numbersPhone = phoneBook[name].concat(arrayPhone);

phoneBook[name] = numbersPhone;

} else {

phoneBook[name] = arrayPhone;

}

}

function remove_phone(nameRemove) {

for (let key in phoneBook) {

if (phoneBook[key].includes(nameRemove)) {

if (phoneBook[key].length > 1) {

phoneBook[key].splice((phoneBook[key].indexOf(nameRemove)),1);

} else {

delete phoneBook[key];

}

return true;

}

}

return false;

}

function showPhone() {

let stringArray = [];

let keys = Object.keys(phoneBook);

keys.sort();

if (keys.length > 0) {

for (let i = 0; i < keys.length; i++) {

resultString = keys[i] + ': ' + phoneBook[keys[i]].join(', ');

stringArray.push(resultString);

}
	return stringArray;
}
	else return stringArray;
}