import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ianimals } from './type/animal';

type IinitialState = {
  animals: any[];
  filter: object;
  token: string;
  page: number;
  reachBottom: boolean;
};

const initialState: IinitialState = {
  animals: [],
  filter: {},
  token: '',
  page: 1,
  reachBottom: false,
};

const data = createSlice({
  name: 'animals',
  initialState: initialState,
  reducers: {
    addAnimal: (state, action: PayloadAction<Ianimals[]>) => {
      action.payload.forEach((item) => {
        if (!state.animals.some((i) => i.id === item.id)) {
          state.animals.push(item);
        }
      });
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
    addPage: (state, action: PayloadAction<number>) => {
      state.page = state.page + action.payload;
    },
    addReachBottom: (state, action: PayloadAction<boolean>) => {
      state.reachBottom = action.payload;
    },
    resetAnimals: (state) => {
      state.animals = [];
    },
  },
});

export const {
  addAnimal,
  addFilter,
  addToken,
  addPage,
  addReachBottom,
  resetAnimals,
} = data.actions;

export const createStore = () =>
  configureStore({
    reducer: data.reducer,
  });

export const store = createStore();
