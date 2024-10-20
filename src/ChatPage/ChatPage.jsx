import React, { useEffect, useRef, useState } from "react";
import { Button, FormControl, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./ChatPage.css";
import Messages from "../Messages/Messages";
import db from "../Firebase/Firebase";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";


const ChatPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(()=>{
      setInput("");
    scrollToBottom();
    });
  };



  useEffect(() => {
    db.collection("messages")
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({id: doc.id, message: doc.data()})));
    });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter ur User-Name"));
  }, []);


  useEffect(()=>{

    scrollToBottom();
}, [messages]);



  const scrollToBottom = () =>{
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  return (
    <div className="Chat-page">
      <div className="logo">
        <img
          src="Images\Facebook_Messenger_logo_2020.svg.png"
          alt="messenger-logo"
        />
        <h2>Welcome {username} </h2>
      </div>

      <div className="messages-container">
        <div ref={messagesEndRef} />

        <FlipMove>
          {messages.map(({ id, message }) => (
            <Messages
              key={id}
              className="messages"
              username={username}
              message={message}
            />
          ))}
        </FlipMove>
      </div>

      <form className="form">
        <FormControl className="input-form">
          <Input
            placeholder="Enter ur Message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          disabled={!input}
          color="primary"
          onClick={sendMessage}
        >
          {<SendIcon />}
        </Button>
      </form>
    </div>
  );
};

export default ChatPage;
