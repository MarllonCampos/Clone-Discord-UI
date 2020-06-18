import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef
  ]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Marllon Campos"
          date="16/10/2020"
          content="Hoje é meu aniversário!"
        />


        <ChannelMessage
          author="Charles Campos"
          date="16/10/2020"
          content={
            <>
              <Mention>@Marllon Campos</Mention>, me carrega la, faz favor
            </>

          }
          hasMention
          isBot
        />


      </Messages>



      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;