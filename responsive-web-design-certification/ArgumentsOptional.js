function addTogether(a, b) {

    if (a && b) {
        //if either argument isn't a valid number, return undefined
        if (typeof (a) != "number" || typeof (b) != "number")
            return undefined;

        //create a function that sums two arguments together
        var sum = a + b;
        return sum;
    }

    if(typeof(a) != "number")
        return undefined;

    //if only one argument is provided, return a function 
    return function addTogetherInternal(z) {
        if(typeof(z) != "number")
            return undefined;

        return a + z;
    }


}


var result = addTogether("http://bit.ly/IqT6zt");
