const initialState = {
  spotifyToken: null,
  user: null,
  searchQuery: '',
  playLists: [],
  shuffledPlayLists: [],
  topFive: [],
  artists: [],
  albums: [],
  tracks: [],
  artist: {},
  album: {},
  track: {},
  playList: {},
  hasError: false,
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_TOKEN":
        return {
          ...state,
          spotifyToken: action.payload,
      }

      case "GET_USER":
        return {
          ...state,
          user: action.payload,
        };
      
      case "GET_USER_PLAYLISTS": {
        const shuffledPlayList = action.payload.sort(() => .5 - Math.random()).slice(0, 8);
        return {
          ...state,
          playLists: action.payload,
          shuffledPlayLists: shuffledPlayList,
        };
      }
      
      case "TOP_FIVE_ARTISTS": 
        return {
          ...state,
          topFive: action.payload.slice(0, 5),
        }
      
      case "HAS_NO_RESULTS": 
        return {
          ...state,
          artists: [],
          albums: [],
          tracks: [],
          hasError: action.payload,
        };
      
      case "SEARCH_QUERY": 
        const { tracks, artists, albums } = action.payload.search;
        const { searchQuery } = action.payload.searchQuery;
        return {
          ...state,
          searchQuery,
          artists: artists.items,
          albums: albums.items,
          tracks: tracks.items
        }
      
      case "GET_ARTIST": 
      return {
          ...state,
          track: {},
          album: {},
          playList: {},
          artist: action.payload,
        }
      
      case "GET_ALBUM":
        return {
          ...state,
          artist: {},
          track: {},
          playList: {},
          album: action.payload,
        }
      
      case "GET_TRACK":
        return {
          ...state,
          artist: {},
          album: {},
          playList: {},
          track: action.payload,
        }
      
      case "GET_PLAYLIST":
        return {
          ...state,
          artist: {},
          album: {},
          track: {},
          playList: action.payload,
        }

      default:
        return state;
    }
}
  