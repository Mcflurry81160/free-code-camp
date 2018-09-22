function permutationArr(num) {
  var regex = /(.)\1+/g;

  //make an array from the input string
  var arr = num.split('');

  permutations = [];

  if (num.match(regex) !== null && num.match(regex)[0] === num) return 0;  

  function swap(a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function generate(n) {
    //if the string has only one char, push char in to permutations array removing any delimeters  
    if (n == 1) {
      permutations.push(arr.join(''));
    }
    //if the string has more than one char...  
    else {
      //for the length of the string...  
      for (var i = 0; i != n; ++i) {
        generate(n - 1);
        //this was tricky to understand. Look at this as parent-child loops. 
        //In recursion, once a child loop finishes, the swap happens.
        //Then the immediate parent loop happens. The corresponding swap happens after this loop.
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  //pass the length of the string to the generate function
  generate(arr.length);

  var count = getCount(permutations, regex);
  return count;
}


function getCount(permutations, regex) {
  var filtered = permutations.filter(function (item) {
    return !item.match(regex);
  });


  return filtered.length;
}

permutationArr('aab');
