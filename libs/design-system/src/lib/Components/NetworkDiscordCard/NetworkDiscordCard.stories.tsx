import { Meta, Story } from '@storybook/react';
import NetworkDiscordCard, { NetworkDiscordCardProps } from '.';
import { endOfDay } from 'date-fns';

export default {
  component: NetworkDiscordCard,
  title: 'Components/NetworkDiscordCard',
} as Meta;

const Template: Story<NetworkDiscordCardProps> = (args) => {
  return (
    <div style={{ backgroundColor: '#f1f1f1', padding: '14px' }}>
      <NetworkDiscordCard {...args} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  message: 'Mainnet has been down for the past two hours',
  source: '@john_flow',
  timestamp: endOfDay(new Date()),
}