import type { Meta, StoryObj } from '@storybook/react';

import { ModalControler } from './ModalControler';

const meta = {
  title: 'Components/Modal',
  component: ModalControler,
  parameters: {
    layout: 'centered',
    docs: { iframeHeight: 500}
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalControler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageModal: Story = {
  args: {
    title: 'Delete category?',
    content: "You're about to delete the Yoga category.<br/>Posts inside this category will also be deleted.",
  },
};
