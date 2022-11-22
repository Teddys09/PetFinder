import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../../../utils/store';

import Card from './Card';
export default {
  title: 'Components/Pet/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// create template with router
const Template: ComponentStory<typeof Card> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Card {...args} />
    </BrowserRouter>
  </Provider>
);
export const Container = Template.bind({});
Container.args = {
  /* the args you need here will depend on your component */
};
