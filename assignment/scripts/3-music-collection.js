console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


let myCollection = [];
console.log(myCollection);


function addToCollection(arr, name, artist, year) {
  let newAlbum = {
    name: name,
    artist: artist,
    year: year,
  }// end object 
    console.log(newAlbum);
    arr.push(newAlbum);
    return newAlbum;
}// end function


addToCollection(myCollection, `Enema of the State`, `Blink-182`, 1999);
addToCollection(myCollection, `Nothing Personal`, `All Time Low`, 2009);
addToCollection(myCollection, `The Young and the Hopeless`, `Good Charlotte`, 2002);
addToCollection(myCollection, `Wake Up, Sunshine`, `All Time Low`, 2020);
addToCollection(myCollection, `All Killer No Filler`, `Sum 41`, 2001);
addToCollection(myCollection, `American Idiot`, `Green Day`, 2004);

console.log(myCollection);


function showCollection(arr) {
  for(let i=0; i<arr.length; i++){
    console.log(`Album Title: ${arr[i].name} by ${arr[i].artist}, published in ${arr[i].year}.`);
  }// end loop
}// end function

showCollection(myCollection);

// - Add a function named `findByArtist`. This function should:
//   - Take in a `collection` parameter. Remember, we want to be able to search any collection!
//   - Take in an `artist` (string) parameter
//   - Create an empty array to hold any matching results, if any
//   - Loop through the `collection` and add any album objects with a matching artist to the array.
//   - Return the array with the matching results. (If no results are found, an empty array should be returned.)

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.

function findByArtist(arr, string) {
  let newCollection = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i].artist == string){
      console.log(`match!`);
      newCollection.push(arr[i]);
    }// end if statement
  }// end for loop
  return newCollection;
}// end function

console.log(findByArtist(myCollection, `All Time Low`));
console.log(findByArtist(myCollection, `A day to Remember`));
console.log(findByArtist(myCollection, `Green Day`));

// - Create a function called `search` that will allow for searching by `artist` **and** `year`. This function should:
//   - Take in a `collection` parameter.
//   - Take in a `searchCriteria` parameter. Create your solution based on a *search object* that has these properties:
//     - ```
//       { artist: 'Ray Charles', year: 1957 }
//       ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching **all** of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object, an empty search object, or missing `artist`/`year` data provided as input, 
//     `return` **all albums** from the `collection` being searched.

function search(arr = 0, artist = 0, year = 0) {
  let newSearch = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i].artist === artist && arr[i].year === year){
      console.log(`perfect match!`)
      newSearch.push(arr[i]);
    }// end if perfect statement
    else if(arr === 0 || artist === 0 || year === 0){
      console.log(`missing data in search`)
      return myCollection;
    }// end empty if statement
    else {
      console.log(`no results found!`);
    }// end no results if
  }// end for loop
    return newSearch;
}// end function

console.log(search(myCollection, `All Time Low`, 2009));
console.log(search(myCollection, `Ray Charles`, 1957));
console.log(search(myCollection, `All Time Low`));


// ### Extra Stretchy Stretch Goals

// - **NOTE**: The following stretch goals **do not have tests** associated with them.
//   - This means it's even more important to use *your own `console.log` skills* to verify that your code behaves as you expect.
// - Add an array of `tracks` to each of your album objects. Each track should have a `name` and `duration`. You will need to 
//   update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
//   - ```
//     TITLE by ARTIST, published in YEAR:
//         1. NAME: DURATION
//         2. NAME: DURATION
//         3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//         1. NAME: DURATION
//         2. NAME: DURATION
//     ```
//   - Update `search` to allow an optional `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, *ignoring* any `artist` or `year` properties.

// > Make sure to test all your code!










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
