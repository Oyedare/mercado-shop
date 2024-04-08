import type { Meta, StoryObj } from '@storybook/react';

import BaseTemplate, { IProductCard } from './ProductCard';
import { mockBaseTemplateProps } from './ProductCard.mocks';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof BaseTemplate> = {
  title: 'cards/ProductCard',
  component: BaseTemplate,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BaseTemplate>;

export const Base: Story = {
  args: {
    //👇 The args you need here will depend on your component
    ...mockBaseTemplateProps.base,
  } as IProductCard,
};
