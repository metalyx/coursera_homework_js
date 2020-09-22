// Телефонная книга
var phoneBook = {};


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	var arrayParseCommand = command.split(" ");
    var commandName =  arrayParseCommand[0];
    // ...
    
    // Обработка команды ADD
    if (commandName === 'ADD') 
    {
    	var data = command.split(" ");
    	name = data[1];
		phones = data[2].split(",");
		
    	return addContact(name, phones);
        // Не забыть вернуть результат выполнения функции addContact
    }

    if (commandName === 'SHOW')
    {
    	return showPhoneBook();
    }

    if (commandName === 'REMOVE_PHONE')
    {
    	var phone = command.split(" ")[1];
    	return remove_Phone(command);
    }

    // ...Обработка других команд... 
    return;
};
function addContact (name, phones)
    {

		if (phoneBook.hasOwnProperty(name))
		{
			phoneBook[name] = phoneBook[name] + ", " + phones;
		}
		else
		{
			phoneBook[name] = phones.join(", ");
		}
		

    }
    function showPhoneBook()
    {
    	var showArray = [];
    	for (var key in phoneBook)
    	{
    		showArray.push(key + ": " + phoneBook[key]);
    	}
    	return showArray.sort();
    }
    function remove_Phone(numbers)
    {
		for (var i in phoneBook) {
            if (phoneBook[i].indexOf(numbers[1]) != -1){
          if(phoneBook[i].length === 9) {
            return(delete phoneBook[i]);
                    } 
                else {
              let number = phoneBook[i].split(', ');
            k = number.indexOf(numbers[1]);
            number.splice(k,1);
                    phoneBook[i] = number[0];
                    for (var j = 1; j < number.length; j++){
              phoneBook[i] += ', ' + number[j]
              }
            return true;
            }
          }
    
        }
        return false;

    }
