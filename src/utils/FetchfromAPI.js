import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {maxResults:'50'},
  headers: {
    'X-RapidAPI-Key': '50e1760313mshb3213c411d5858ap1f8674jsn3123285a7d14',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) =>{
  const {data} =  await axios.get(`${BASE_URL}/${url}`,options)
return data;
}