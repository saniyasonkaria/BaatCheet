import React, { useEffect ,useState} from "react";
import axios from "axios";

const Chats = () => {
    const [chats, setChats] = useState([]);
  const fetchData = async () => {
    const data = await axios.get("/api/chat");
    setChats(data.data);
  };
  useEffect(() => {
    fetchData();
  });
  return (<div>
    {chats.map((chat)=>(
      <div key={chat._id}>
        <h1>{chat.chatName}</h1>
      </div>
    ))}
  </div>);
};

export default Chats;
