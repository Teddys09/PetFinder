import Axios from 'axios';

import { useDispatch } from 'react-redux';

import { addAnimal, addAnimalsFiltered, addToken } from './store';

const GetToken = async () => {
  const dispatch = useDispatch();
  const params = {
    grant_type: 'client_credentials',
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };

  const petFinder = await Axios.post(
    'https://api.petfinder.com/v2/oauth2/token',
    params
  );

  dispatch(addToken(petFinder.data.access_token));

  return petFinder.data.access_token;
};

const GetRandomAnimal = async (url: string, token: string) => {
  const dispatch = useDispatch();
  if (!token) token = await GetToken();

  await Axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (url === 'https://api.petfinder.com/v2/animals') {
        dispatch(addAnimal(res.data.animals));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const GetFilteredAnimal = async (url: string, token: string) => {
  if (!token) token = await GetToken();

  const dispatch = useDispatch();

  await Axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch(addAnimalsFiltered(res.data.animals));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { GetRandomAnimal, GetFilteredAnimal };
