function smallestCommons(arr) {
  var sortedArr = arr.sort();
  console.log(sortedArr);
  var allList = [];
  var arrToCompare = [];
  var isNotLcm = true;
  var lcm = 0;

  for (var i = sortedArr[0]; i <= sortedArr[1]; i++) {
    allList.push(i);
  }

  console.log(allList);
  var firstElement = allList[0];
  var lastElement = allList[allList.length - 1];
  

  while (isNotLcm) {
    lcm++;
    for (var j = firstElement; j <= lastElement; j++) {
      if (lcm % j !== 0) {
        break;
      }
      else if (j == lastElement) {
        isNotLcm = false;
      }
    }
  }
  
  console.log(lcm);
  return lcm;
}



smallestCommons([23, 18]);
