const API_URL = () => {
  let API_URL = '';
  if (process.env.NODE_ENV === 'production') {
    API_URL = 'https://tabata-backend.herokuapp.com';
  }
  return API_URL;
};

export const path = API_URL();
