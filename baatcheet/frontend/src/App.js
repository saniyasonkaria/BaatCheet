import "./App.css";
// import { Button } from "@chakra-ui/react";

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chats from "./pages/Chats";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
// function App() {
//   return (
//       <Button>Click me</Button>
//   );
// }

// export default App;
