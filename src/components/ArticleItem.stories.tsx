import type { Meta, StoryObj } from '@storybook/react-vite';

import ArticleItem from './ArticleItem';

const meta = {
  component: ArticleItem,
} satisfies Meta<typeof ArticleItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 1,
    itemId: 8863,
}
};