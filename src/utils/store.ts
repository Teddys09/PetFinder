import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type IinitialState = {
  animals: object[];
  filter: object;
  token: string;
};

const initialState: IinitialState = {
  animals: [],
  filter: {},
  token: '',
};

const data = createSlice({
  name: 'animals',
  initialState: initialState,
  reducers: {
    addAnimal: (state, action: PayloadAction<object[]>) => {
      state.animals = [...action.payload];
    },
    addFilter: (state, action: PayloadAction<object>) => {
      const itemCopy = JSON.parse(JSON.stringify(action.payload));

      if (itemCopy.age === 'Any') {
        itemCopy.age = '';
      }
      if (itemCopy.gender === 'Any') {
        itemCopy.gender = '';
      }

      state.filter = { ...itemCopy };
    },

    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { addAnimal, addFilter, addToken } = data.actions;

export const createStore = () =>
  configureStore({
    reducer: data.reducer,
  });

export const store = createStore();
