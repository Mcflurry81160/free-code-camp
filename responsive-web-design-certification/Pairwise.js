//TASK    
//find element pairs in arr, whose sum equal the 
//second argument and return the sum of their indices.

//If multiple pairs are possible that have the same numeric 
//elements but different indices, return the smallest sum of 
//indices. Once an element has been used, it cannot be reused 
//to pair with another.

function pairwise(arr, arg) {
    if (arr.length == 0)
        return 0;

    var indicesArr = [];

    //loop through both arrays. Check if the sum equals the arg value.
    //if true, get the two indexes and add to the indicesArr.
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            if (i != j) {
                if (arr[j] + arr[i] == arg && indicesArr.indexOf(i) == -1 && indicesArr.indexOf(j) == -1) {
                    //non of the indexes have already been added. Add the indexes to the array.
                    indicesArr.push(i);
                    indicesArr.push(j);
                }
            }
        }
    }

    var sum = indicesArr.reduce(function (a, b) {
        return a + b;
    });

    return sum;
}


pairwise([1, 4, 2, 3, 0, 5], 7); 