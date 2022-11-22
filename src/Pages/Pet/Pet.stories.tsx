import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import './Pet.styles';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';

import Pet from './Pet';

export default {
  title: 'Pages/Pet',
  component: Pet,
} as ComponentMeta<typeof Pet>;

const Template: ComponentStory<typeof Pet> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Pet {...args} />
    </BrowserRouter>
  </Provider>
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
