
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var i = 0; i < arr.length; i++) {

    //get the altitude for each item
    var altitude = arr[i].avgAlt;

    //calculate orbital period
    var semiMajorAxisPowered = Math.pow(earthRadius + altitude, 3);
    var orbitalPeriod = 2 * Math.PI * Math.pow((semiMajorAxisPowered / GM), 0.5);

    //remove the avgAlt entry from the array
    delete arr[i]['avgAlt'];

    //add orbitalPeriod to the array
    arr[i]['orbitalPeriod'] = Math.round(orbitalPeriod);  
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//[{name: "sputnik", orbitalPeriod: 86400}].
