import React, { forwardRef } from "react";
import "./Messages.css";
import { Card, CardContent, Typography } from "@mui/material";

const Messages = forwardRef(({username, message}, ref) => {
const isUser = username === message.username;


  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="black" variant="h5" component="h2">
            <h5>
              {!isUser && `${message.username || "unknown user"}: `} {message.text}
            </h5>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messages;
