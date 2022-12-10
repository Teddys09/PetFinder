import Axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnimal, addToken } from './store';

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

const GetAnimals = async () => {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.token);
  const filter = useSelector((state: any) => state.filter);
  useEffect(() => {
    if (token === '') return;
    Axios.get(
      `https://api.petfinder.com/v2/animals?type=${filter.type ?? ''}&age=${
        filter.age ?? ''
      }&gender=${filter.gender ?? ''}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        dispatch(addAnimal(res.data.animals));

        return res.data.animals;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, filter, dispatch]);
};

export { GetAnimals, GetToken };
