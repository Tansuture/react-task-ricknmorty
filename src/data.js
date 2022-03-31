import axios from 'axios'

export const fetchAll = async (pageNumber,search,status,species) => {
   let fetchData;
   await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}`).then((res) => (fetchData = res.data));
   return fetchData;
   
 };