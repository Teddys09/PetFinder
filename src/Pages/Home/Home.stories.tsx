import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Home from './Home';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Home {...args} />
    </BrowserRouter>
  </Provider>
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
