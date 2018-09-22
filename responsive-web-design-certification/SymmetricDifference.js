

function sym() {
    var argsArray = [];
    for (var i = 0; i < arguments.length; i++) {
        argsArray.push(arguments[i]);        
    }

    function symDifference(arrayOne, arrayTwo) {
        var resultSymDiffArray = [];
        console.log(arrayOne);
        //Loop through each item in arrayOne
        //If item is not in arrayTwo, and the result array, add it to the result array
        arrayOne.forEach(function(arrOneItem) {
            if (arrayTwo.indexOf(arrOneItem) == -1 && resultSymDiffArray.indexOf(arrOneItem) == -1) {
                resultSymDiffArray.push(arrOneItem);
            }
        });

        //Loop through each item in arrayTwo
        //If item is not in arrayOne, and the result array, add it to the result array
        arrayTwo.forEach(function(arrTwoItem) {
            if (arrayOne.indexOf(arrTwoItem) == -1 && resultSymDiffArray.indexOf(arrTwoItem) == -1) {
                resultSymDiffArray.push(arrTwoItem);
            }
        });

        return resultSymDiffArray; 
    }

    console.log(argsArray);
    var test = argsArray.reduce(symDifference);
    console.log(test);
    return test;
}




sym([1, 2, 3], [5, 2, 1, 4]); //should give 3,4,5
