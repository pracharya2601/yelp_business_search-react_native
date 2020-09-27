import { useEffect, useState} from 'react';
import yelpApi from '../api/yelpApi';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
  
    const searchSubmit = async (searchTerm) => {
      try {
        const response = await yelpApi.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,
            location: 'san francisco'
          }
        });
        setResults(response.data.businesses);
      } catch(err) {
        setError('Something went wrong')
      }
    }
  
    useEffect(() => {
      searchSubmit('indian restaurent')
    }, [])

    return [searchSubmit, results, error];
};