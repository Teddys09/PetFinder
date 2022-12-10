import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import './Header.styles';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// create template with router
const Template: ComponentStory<typeof Header> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Header {...args} />
    </BrowserRouter>
  </Provider>
);
export const Container = Template.bind({});
Container.args = {
  /* the args you need here will depend on your component */
};
