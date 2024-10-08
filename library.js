const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {       
       for(let playlist in library.playlists) {
              const playlistId =  library.playlists[playlist];     
              const playlistName = playlistId.name;     
              const noOfTracks = playlistId.tracks.length;     
              console.log(`${playlistId}: ${playlistName} ${noOfTracks} tracks`);
       }
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {    
       for(let track in library.tracks) {
              const trackId = library.tracks[track];
              const trackName = trackId.name;
              const artistName = trackId.artist;
              const albumName = trackId.album;
             console.log(`${trackId}: ${trackName} by ${artistName} (${albumName})`);
       }
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       for(let playlist in library.playlists) {
              const playlistID = library.playlists[playlist];    
              const playlistName = playlistID.name;  
              const noOfTracks = playlistID.tracks.length; 
              const trackList = playlistID.tracks;
              if(playlistId === playlistID){
                     console.log(`${playlistId}: ${playlistName} ${noOfTracks} tracks`);
                     for(let i = 0; i < noOfTracks; i++) {
                            const trackId = trackList[i];
                            const trackName = library.tracks[trackList[i]].name;
                            const artistName = library.tracks[trackList[i]].artist;
                            const albumName = library.tracks[trackList[i]].album;
                            console.log(`${trackId}: ${trackName} by ${artistName} (${albumName})`);
                     }
              }        
       }
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       const existingPlaylist = library.playlists[playlistId].tracks;
       existingPlaylist.push(trackId)
       console.log(existingPlaylist)
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
const addTrack = function(name, artist, albumm) {
       // using generateUid() to create unique track id
       const trackId = generateUid();
       const newTrack = {
              id:trackId,
              name:name,
              artist:artist,
              albumm:albumm
       }
       library.tracks[trackId] = newTrack;
      console.log(library.tracks);
}

// adds a playlist to the library
const addPlaylist = function(name) {
       // using generateUid() to create unique playlist id
       const playlistId = generateUid();
       const newPlaylist = {
              id:playlistId,
              name:name,
              tracks:[]
       }
       library.playlists[playlistId] = newPlaylist;
      console.log(library.playlists);
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

       for(let track in library.tracks){
              // const trackId =  library.tracks[track];
              // const trackName = trackId.name;
              // const artistName = trackId.artist;
              // const albumName = trackId.album;
              // console.log(albumName.search(query))
       }


}

printPlaylists(library);
console.log("======================================");
printTracks(library);
console.log("======================================");
printPlaylist('p02',library);
console.log("======================================");
addTrackToPlaylist('t01','p02',library);
console.log("======================================");
addTrack('LIFETIMES', 'Kety Perry', 'LIFETIMES');
console.log("======================================");
addPlaylist('Relaxing Music');
console.log("======================================");
printSearchResults('Three')