import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type IinitialState = {
  animals: object[];
  filter: object;
  animalsFiltered: object[];
};

const initialState: IinitialState = {
  animals: [],
  filter: {},
  animalsFiltered: [],
};

const data = createSlice({
  name: 'animals',
  initialState: initialState,
  reducers: {
    addAnimal: (state, action: PayloadAction<object[]>) => {
      addItem(state.animals, action.payload);
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
    addAnimalsFiltered: (state, action: PayloadAction<object[]>) => {
      addItem(state.animalsFiltered, action.payload);
    },
  },
});

export const { addAnimal, addFilter, addAnimalsFiltered } = data.actions;

export const createStore = () =>
  configureStore({
    reducer: data.reducer,
  });

export const store = createStore();
function addItem(store: any, item: any) {
  // fix TypeError: Cannot assign to read only property '16' of object '[object Array]'
  let itemCopy = JSON.parse(JSON.stringify(item));
  interface Ix {
    title: string;
  }

  let index = store.findIndex((x: Ix) => x.title === itemCopy.title);

  if (index === -1) {
    store.push(itemCopy);
  } else {
    store[index] = itemCopy;
  }
}
