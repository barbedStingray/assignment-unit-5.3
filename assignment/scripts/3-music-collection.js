console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


let myCollection = [];
console.log(myCollection);


function addToCollection(arr, name, artist, year, track) {
  let newAlbum = {
    name: name,
    artist: artist,
    year: year,
    tracks: track,
  }// end object 
    console.log(newAlbum);
    arr.push(newAlbum);
    return newAlbum;
}// end function


addToCollection(myCollection, `Enema of the State`, `Blink-182`, 1999, [[`Mutt`, `3:24`], [`All the Small Things`, `2:47`], [`Aliens Exist`, `3:13`]]);
addToCollection(myCollection, `Nothing Personal`, `All Time Low`, 2009, [[`Weightless`, `3:18`], [`Stella`, `3:24`], [`Therapy`, `3:44`]]);
addToCollection(myCollection, `The Young and the Hopeless`, `Good Charlotte`, 2002, [[`The Anthem`, `2:55`], [`Girls & Boys`, `3:03`], [`Lifestyles of the Rich and the Famous`, `3:10`]]);
addToCollection(myCollection, `Wake Up, Sunshine`, `All Time Low`, 2020, [[`Wake Up, Sunshine`, `3:16`], [`Monsters`, `2:54`], [`Trouble Is`, `2:27`]]);
addToCollection(myCollection, `All Killer No Filler`, `Sum 41`, 2001, [[`Fat Lip`, `2:58`], [`In Too Deep`, `3:27`], [`Summer`, `2:49`]]);
addToCollection(myCollection, `American Idiot`, `Green Day`, 2004, [[`American Idiot`, `2:54`], [`Boulevard of Broken Dreams`, `8:14`], [`When September Ends`, `4:46`]]);

console.log(myCollection);


//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
//   - ```
//     TITLE by ARTIST, published in YEAR:
//         1. NAME: DURATION
//         2. NAME: DURATION
//         3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//         1. NAME: DURATION
//         2. NAME: DURATION

function showCollection(arr) {
  for(let item of arr){
    console.log(`New ${item.name} by ${item.artist} published in ${item.year}.`);
    for(let i=0; i<item.tracks.length; i++){
      console.log(`Track ${i+1} - ${item.tracks[i][0]}: ${item.tracks[i][1]}.`);
    }
  }// end for loop

  // not for loop example
  // for(let i=0; i<arr.length; i++){
  //   console.log(`Album Title: ${arr[i].name} by ${arr[i].artist}, published in ${arr[i].year}.`);
  // }// end loop


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
  console.log(`in findByArtist`);
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

//   - Update `search` to allow an optional `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, *ignoring* any `artist` or `year` properties.


// extended loop function
// function search(arr = 0, artist = 0, year = 0) {
//   console.log(`in search`);
//   let newSearch = [];
//   for(let i=0; i<arr.length; i++){
//     if(arr[i].artist === artist && arr[i].year === year){
//       console.log(`perfect match!`)
//       newSearch.push(arr[i]);
//     }// end if perfect statement
//     else if(arr === 0 || artist === 0 || year === 0){
//       console.log(`missing data in search`)
//       return myCollection;
//     }// end empty if statement
//     else {
//       console.log(`no results found!`);
//     }// end no results if
//   }// end for loop
//     return newSearch;
// }// end function

// for loop function with stretch
function search(array = 0, artist = 0, year = 0, trackName = 0){
  console.log(`in for search loop`);
    let newSearch = [];
      
    for(let props of array){
        
      // trackname search
        if(trackName !== 0){
          console.log(`track name searching`);
          for(let item of array){
            for(let songs of item.tracks){
              if(songs[0] === trackName){
              console.log(`track name match!`);
              return songs;
              }// end first for loop
            }// end match name
          }// end for loop for trackname
        } // end search by track name
        
          else if( props.artist === artist && props.year === year){
            console.log(`perfect match!`);
            newSearch.push(props);
            console.log(newSearch);
          } // end perfect artist and year match
          else if(array === 0 || artist ===0 || year === 0){
            console.log(`missing data in search`);
            return myCollection;
          } // end missing data
          else {
            console.log(`no results found`);
          } // end no results if
      }// end for loop
        return newSearch;
  }// end function



console.log(search(myCollection, `All Time Low`, 2009, `In Too Deep`));
console.log(search(myCollection, `Ray Charles`, 1957));
console.log(search(myCollection, `All Time Low`));
console.log(search(myCollection, `Wake Up, Sunshine`));


// ### Extra Stretchy Stretch Goals

// - **NOTE**: The following stretch goals **do not have tests** associated with them.
//   - This means it's even more important to use *your own `console.log` skills* to verify that your code behaves as you expect.
// - Add an array of `tracks` to each of your album objects. Each track should have a `name` and `duration`. You will need to 
//   update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//     ```

// > Make sure to test all your code!

// add additional tracks function

function addAlbumTracks(arr, albName, trackName, duration){
  for(let item of arr){
    if( item.name === albName){
      console.log(`Adding tracks to ${item.name} by ${item.artist}.`);
      item.tracks.push([trackName, duration]);
    }// end if statement
  }// end for loop
}//end addAlbumTracks


// console.log(myCollection);









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
