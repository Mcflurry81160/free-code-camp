
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    //Check if id exists in collection
    var hasRecordId = collectionCopy.hasOwnProperty(id.toString());
    if (hasRecordId) {
       
        //If prop exists and value is empty, delete the property from the album
        if(collectionCopy[id.toString()].hasOwnProperty(prop.toString()) && value == ""){
            delete collectionCopy[id.toString()][prop.toString()];
            return collectionCopy;
        }

        //if prop is not "tracks", update or set the value
        if (prop != "tracks" && value != "") {
            //update prop value
            collectionCopy[id.toString()][prop.toString()] = value;
        }
        if (prop == "tracks") {
            var record = collectionCopy[id.toString()];
            var hasTrackArray = record.hasOwnProperty("tracks");
            //check if album has track property
            if (hasTrackArray) {
                //push onto the end of the track array
                var trackArray = collectionCopy[id.toString()]["tracks"];
                trackArray.push(value);
            }
            else {
                //no track array. Create one.
                var trackArray = collectionCopy[id.toString()]["tracks"] = [];
                trackArray.push(value);
            }
        }
    }
    return collectionCopy;
}


// Alter values below to test your code
updateRecords(5439, "tracks", "ABBA"); 

