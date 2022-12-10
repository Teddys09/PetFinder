import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import './Lightbox.styles';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';

import Lightbox from './Lightbox';

export default {
  title: 'Components/Home/Lightbox',
  component: Lightbox,
} as ComponentMeta<typeof Lightbox>;

// create template with router
const Template: ComponentStory<typeof Lightbox> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Lightbox {...args} />
    </BrowserRouter>
  </Provider>
);
export const Container = Template.bind({});
Container.args = {
  /* the args you need here will depend on your component */
};
