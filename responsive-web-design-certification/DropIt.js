
function dropElements(arr, func) {
    var slicedArr = [];
    var trueValue = 0;

    for (var i = 0; i <= arr.length - 1; i++) {
        var isTrueValue = func(arr[i]);
        if (isTrueValue) {
            trueValue = arr.slice(i);
            console.log(trueValue);            
            break;
        }
        else {
            trueValue = [];
            break;
        }
        
    }   
    return trueValue;
}

// dropElements([1, 2, 3], function (n) { return n < 3; });
// dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
// dropElements([1, 2, 3], function(n) {return n > 0;});
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
