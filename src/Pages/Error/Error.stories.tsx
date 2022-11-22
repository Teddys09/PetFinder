import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Error from './Error';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args: any) => (
  <BrowserRouter>
    <Error {...args} />
  </BrowserRouter>
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};
