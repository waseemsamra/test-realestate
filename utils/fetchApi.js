import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'e7647953c0msh6fc29bec01a6b1fp1a73eajsnf2c2a7859d5f',
    },
  });
    
  return data;
}