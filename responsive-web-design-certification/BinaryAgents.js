//Return an English translated sentence of the passed binary string.
//The binary string will be space separated.

//The binary string will be space separated.

function binaryAgent(str) {
    var splitBinaryArr = str.split(" ");
    var sentence = '';

    for (let i = 0; i < splitBinaryArr.length; i++) {
        sentence += String.fromCharCode(parseInt(splitBinaryArr[i], 2));        
    }
    //Aren't bonfires fun!?
    return sentence;

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
