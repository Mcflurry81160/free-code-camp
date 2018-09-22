function telephoneCheck(str) {
    var regexStr = '';
    //Check for area code. Check if number starts with 1
    if ((/^1\s?/).test(str)) {
        regexStr = new RegExp(/^1\s?(\([0-9]{3}\)|[0-9]{3}\-?)\s?[0-9]{3}\-?\s?[0-9]{4}$/);
    }
    else {
        regexStr = new RegExp(/^(\(?[0-9]{3}\)?|[0-9]{3}\-?)\s?[0-9]{3}\-?[0-9]{4}$/);
    }
    
    if(regexStr === '') {
        return false;
    }
    return regexStr.test(str);
}

// telephoneCheck("1 555-555-5555"); 
// telephoneCheck("(555) 555-5555");
// telephoneCheck("(6505552368)");
// telephoneCheck("1 (555) 555-5555");
// telephoneCheck("5555555555");
// telephoneCheck("1(555)555-5555");

// telephoneCheck("1 456 789 4444");
// telephoneCheck("1 456 789 4444");

telephoneCheck("1 555)555-5555"); 