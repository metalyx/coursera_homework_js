
function xselect(obj, keys)
{

    var arr = [];
    
    for (var k in obj)
    {
        var tmp = {};
        for (var i = 0; i < keys.length; i++)
        {
            
            for (var j = 0; j < Object.keys(obj[k]).length; j++)
            {
                if (keys[i] == Object.keys(obj[k])[j])
                {
                    tmp[Object.keys(obj[k])[j]] = obj[k][keys[i]];
                }
            }
        }

	function isEmpty(obj) {
	    return Object.keys(obj).length === 0;
	}
        
        if (!isEmpty(tmp))
        {
        	arr.push(tmp);
        }
        
        
    }
   
    return arr;
}

function xfilterIn(obj, key, values)
{
    var arr = [];
    for(var k in obj)
    {
        var tmp = {};
        
            if (a = values.some(function(b){
                return b == obj[k][key];
            }))
            {
                tmp[k] = obj[k];
            }
            

        
        arr.push(tmp);
   
    }
    
    var result = [];
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = 0; j < arr.length; j++)
        {
            if (arr[i][j] != undefined)
            {
                result.push(arr[i][j]);
            }
            
        }
    }
    return result;

}

function query (collection)
{ 
//  args - array of all argumens
    var args = [].slice.call(arguments);
    // console.log(args)
//  obj  - array, zero argument(persons)
    var obj = JSON.parse(JSON.stringify(args[0]));
    //  если нет функций возвращаем копию массива с людьми
    if (arguments.length == 1)
    {
        return obj;
    }
    
    var functions = [];
    /*Если аргумент.count больше 1 то парсим команды*/
    for (var key in args)
        {
            if (key != 0) {
                if (args[key][0] == "filterIn") {
                    functions.unshift(args[key]);
                } else {
                    functions.push(args[key]);
                }
            }
        }
         
    

    for (var i = 0; i < functions.length; i++)
    {
        if (functions[i][0] == "select" )
        {

            obj = xselect(obj, functions[i][1]);
            
            
        }
        if (functions[i][0] == "filterIn")
        {
            obj = xfilterIn(obj, functions[i][1][0], functions[i][1][1]);
            
        }
    }
   //console.log(obj);
   return obj;
}
function select()
{
    var fields = [].slice.call(arguments);
    return ["select", fields];
}

function filterIn()
{
    var fields = [].slice.call(arguments);
    return ["filterIn", fields];
}

module.exports = {
	query: query,
	select: select,
	filterIn: filterIn
};