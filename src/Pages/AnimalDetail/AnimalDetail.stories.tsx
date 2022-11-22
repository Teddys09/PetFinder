import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AnimalDetail from './AnimalDetail';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages/AnimalDetail',
  component: AnimalDetail,
} as ComponentMeta<typeof AnimalDetail>;

const Template: ComponentStory<typeof AnimalDetail> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <AnimalDetail {...args} />
    </BrowserRouter>
  </Provider>
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
