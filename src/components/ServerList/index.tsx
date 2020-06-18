import React from 'react';

import ServerButton from '../ServerButton'

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
        <ServerButton isHome />

        <Separator /> 

        <ServerButton hasNotifications/>
        <ServerButton />
        <ServerButton mentions={3}/>
        <ServerButton />
        <ServerButton hasNotifications/>
        <ServerButton />
        <ServerButton mentions={2}/>
        <ServerButton />
        <ServerButton mentions={23}/>
        <ServerButton />
        <ServerButton hasNotifications/>
        <ServerButton />   
        <ServerButton />   
        <ServerButton />   
    </Container>
  )
}

export default ServerList;