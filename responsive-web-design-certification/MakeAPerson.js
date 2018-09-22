
var Person = function(firstAndLast) {
    var names = firstAndLast.split(" ");

    this.getFullName = function() {
      return names.join(" ");
    };
  
    this.getFirstName = function() { 
      return names[0];
    };
  
    this.getLastName = function() {
      return names[names.length-1];
    };
  
    this.setFirstName = function(first) {
      names[0] = String(first);
    };
  
    this.setLastName = function(last) {
      names[1] = last;
    };
  
    this.setFullName = function(first) {
      names = first.split(" ");         
    };  
    
    return firstAndLast;
};

var bob = new Person('Bob Ross');




