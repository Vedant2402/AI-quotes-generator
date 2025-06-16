import axios from 'axios';

export const fetchQuote = async () => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data;
  } catch (error) {
    console.error('Error fetching quote:', error.message || error);
    throw error;
  }
};

