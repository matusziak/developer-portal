import { Meta, Story } from '@storybook/react';
import FlipCell, { FlipCellProps } from '.';

export default {
  component: FlipCell,
  title: 'Components/FlipCell',
} as Meta;

const Template: Story<FlipCellProps> = (args) => {
  return (
    <FlipCell {...args} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  numComments: 23,
  heading: 'Error Subscribing to Events in Default Docs',
  tags: ['moo', 'crab', 'rangoon'],
  participant: {
    profilePicture: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    name: 'Marky Mark'
  },
  date: '23/3/22'
};