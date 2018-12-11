import axios from 'axios';
const API_KEY = '596142d46fe246a9a50e1f4bfc71a72d';
const ROOT_URL = 'https://newsapi.org/v2';

export const SOURCE_LIST = 'source_list';
//export const SELECT_SOURCE = 'select_source';

export function fetchSourceList(){
  const request = axios.get(`${ROOT_URL}/sources?language=en&country=us&apiKey=${API_KEY}`);
  return{
    type: SOURCE_LIST,
    payload: request
  };
}
