import { useState } from "react";

const Message = (props) => {
  const [message, setMessage] = useState("hello  world");
  const { name, secondName } = props;
  return (
    <div>
      <h1>{message}</h1>
      <h2>
        this is {name} {secondName}
      </h2>
      <button
        onClick={() => setMessage("thank you for subscribing the channel")}
      >
        Subscribe
      </button>
    </div>
  );
};

export default Message;
