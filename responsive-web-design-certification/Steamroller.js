//Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {
    var myArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) 
            addElementIfArray(arr[i], myArray);        
        else
            myArray.push(arr[i]);
    }

    return myArray;
    //[1,2,3,4]
    //["a","b"]
}

function addElementIfArray(elementArr, myArray) {
    for (var j = 0; j < elementArr.length; j++) {
        if(Array.isArray(elementArr[j]))
            addElementIfArray(elementArr[j], myArray)        
        else
            myArray.push(elementArr[j]);        
    }
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]])
