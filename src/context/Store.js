import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { getTokenFromUrl } from '../utils/hash';
import SpotifyWebApi from 'spotify-web-api-js'
import debounce from 'lodash/debounce'
import { Reducer } from './Reducer';

export const GlobalContext = createContext();

const spotifyApi = new SpotifyWebApi()

export const GlobalProvider = ({ children }) => {  
  const [state, dispatch] = useReducer(Reducer, {})

  useEffect(() => { 
    const hash = getTokenFromUrl()
    const accessToken = hash.access_token
    if (accessToken) {
      logIn(accessToken)
      spotifyApi.setAccessToken(accessToken)
      spotifyApi.getMe().then(data => {
        getUser(data)
        getUserPlaylists(data.id)
      })
      getTopFiveArtists()
    }
  }, []);

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    }
  }, []);

  const getUserPlaylists = async (id) => {
    const  data  = await spotifyApi.getUserPlaylists(id)
    dispatch({ 
      type: 'GET_USER_PLAYLISTS', 
      payload: data.items 
    })
  }

  const getTopFiveArtists = async () => {
    try {
      const topArtists = await spotifyApi.getMyTopArtists({ limit: 5 })
      dispatch({ 
        type: 'TOP_FIVE_ARTISTS', 
        payload: topArtists.items 
      })     
    } catch (error) {
      console.log(error)
      
    }
  }

  const searchQuery = async (e) => {
    e.preventDefault()
    if (e.target.value.length > 0 ) {
      try {
        const search = await spotifyApi.search(e.target.value, ['artist', 'album', 'track'])
        search.artists.items.length && search.albums.items.length && search.tracks.items.length ? 
        dispatch({
          type: 'SEARCH_QUERY',
          payload: {
            searchQuery: e.target.value,
            search
          }
        }) :
        dispatch({
          type: 'HAS_NO_RESULTS',
          payload: true
        })

      } catch (error) {
        console.log(error)
      }
    } else {
      getTopFiveArtists()
      dispatch({
        type: 'HAS_NO_RESULTS',
        payload: false
      })
    }      
  }

  const debouncedChangeHandler = useMemo(() => {
    return debounce(searchQuery, 300);
  }, []);

  const getArtist = async (id) => {
    try {
      const artist = await spotifyApi.getArtist(id)
      dispatch({
        type: 'GET_ARTIST',
        payload: artist
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getTrack = async (id) => {
    try {
      const track = await spotifyApi.getTrack(id)
      dispatch({
        type: 'GET_TRACK',
        payload: track
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getAlbum = async (id) => {
    try {
      const album = await spotifyApi.getAlbum(id)
      dispatch({
        type: 'GET_ALBUM',
        payload: album
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getPlaylist = async (id) => {
    try {
      const playlist = await spotifyApi.getPlaylist(id)
      dispatch({
        type: 'GET_PLAYLIST',
        payload: playlist
      })
    } catch (error) {
      console.log(error)
    }
  }
  
  const logIn = (token) =>{
    dispatch({
      type: "GET_TOKEN",
      payload: token
    });
  }

  const getUser = (user) =>{
    dispatch({
      type: "GET_USER",
      payload: user
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        debouncedChangeHandler,
        getArtist,
        getTrack,
        getAlbum,
        getPlaylist
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
