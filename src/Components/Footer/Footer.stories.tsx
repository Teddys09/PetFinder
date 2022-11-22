// stories for Header component
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import './Footer.styles';
import { Provider } from 'react-redux';
import { store } from '../../utils/store';

import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

// create template with router
const Template: ComponentStory<typeof Footer> = (args: any) => (
  <Provider store={store}>
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  </Provider>
);
export const Container = Template.bind({});
Container.args = {
  /* the args you need here will depend on your component */
};
