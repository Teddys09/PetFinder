// stories for Header component
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../../../utils/store';

import Info from './Info';

export default {
  title: 'Components/Header',
  component: Info,
} as ComponentMeta<typeof Info>;

// create template with router
const Template: ComponentStory<typeof Info> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Info {...args} />
    </BrowserRouter>
  </Provider>
);
export const Container = Template.bind({});
Container.args = {
  /* the args you need here will depend on your component */
};
