import React from 'react';

import { Container, InviteIcon, SettingsIcon, HashtagIcon} from './styles';



export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>        
      </div>


      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
      
    </Container>
  );
}

export default ChannelButton;