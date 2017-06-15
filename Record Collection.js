
// Setup
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
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  //set id
  collection[id] = {};
  var propVar = "tracks";

   if (prop !== propVar && value !== ""){
     //1.
     collection[id][prop] = value;
   }
   if (!collection[id].hasOwnProperty(propVar)){
     //2.
     collection[id][propVar] = [];
   }
   if (prop === propVar && value !==""){
     //3.
     collection[id][propVar].push(value);
   }
    if (value ===""){
     //4.
     delete collection[id][propVar];
   }



  return collection;
}

// Alter values below to test your code
updateRecords(2468, "tracks", "Free");
