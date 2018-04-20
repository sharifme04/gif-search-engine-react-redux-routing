import axios from 'axios';
import { FETCH_GIFS } from './actionConst';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=dc6zaTOxFJmzC';

export function fetchGifs(term = null) {
  return dispatch =>{
      axios.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`)
      .then( (response)=> {
        console.log(response.data.data);
        dispatch({
          type: FETCH_GIFS,
          payload: response.data.data
        })

      })
      .catch((error)=> {
        console.log(error);
      });
  }
}
