
function updateInventory(arr1, arr2) {

    // Compare and update the inventory stored in a 
    //2D array against a second 2D array of a fresh delivery. 
    //Update the current existing inventory item quantities (in arr1). 
    //If an item cannot be found, add the new item and quantity into the inventory array. 
    //The returned inventory array should be in alphabetical order by item.

    var resultArr = [];
    var matchedIndexesArr2 = [];

    for (var i = 0; i < arr1.length; i++) {
        var foundMatch = false;
        for (var j = 0; j < arr2.length; j++) {
            //Only check if item has not already been matched
            if (matchedIndexesArr2.indexOf(j) == -1) {
                //If the item is found, add quantities            
                if (arr1[i][1] == arr2[j][1]) {
                    foundMatch = true;
                    var quantity = arr1[i][0] + arr2[j][0];
                    var item = arr2[j][1];

                    matchedIndexesArr2.push(j);

                    resultArr.push([quantity, item]);
                    //Don't check others in second array if match was found
                    break;
                }
            }
        }

        //If not found, add the new item and quantities as new entry                 
        if (!foundMatch) {
            resultArr.push(arr1[i]);
        }
    }

    //if any unmatched items exist in array 2, get them as well
    if (matchedIndexesArr2.length != arr2.length)
        addUnmatchedItems(matchedIndexesArr2, arr2, resultArr);

    var sortedResultArray = sortArray(resultArr);

    return sortedResultArray;
}


function addUnmatchedItems(matchedIndexes, array, resultArr) {

    for (var i = 0; i < array.length; i++) {
        //if item in array was unmatched, add it to itemsUnmatched array 
        if (matchedIndexes.indexOf(i) == -1) {
            resultArr.push(array[i]);
        }
    }

}

function sortArray(array) {

    array.sort(function (a, b) {        
        if (a[1] > b[1])
            return 1;

        if (a[1] < b[1])
            return -1;

        return 0;

    });

    return array;
}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

var test = updateInventory(curInv, newInv);

