/**
 * Created by Rj on 12/3/2016.
 */
import React, {Component} from 'react';

function Mailbox(props){
    const unReadMessages = props.unReadMessages;
    return (
      <div>
          <h1>Hello</h1>
          {unReadMessages &&
          <h2>
              You Have {unReadMessages.length? unReadMessages.length : 0} Unread Messages
          </h2>
          }
      </div>
    );
}
const messages = ['sdf','df'];

function Mail(){
    return(
      <Mailbox unReadMessages={messages} />
    );
}

export default Mail;