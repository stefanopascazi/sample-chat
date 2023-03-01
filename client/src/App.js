import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import socketIO from 'socket.io-client';

const Home = React.lazy(() => import("./pages/Home"));
const Chat = React.lazy(() => import("./pages/Chat"))

const socket = socketIO.connect('http://localhost:4000');
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<>loading....</>}>
              <Home socket={socket} />
            </React.Suspense>
          }></Route>
          <Route path="/chat" element={
            <React.Suspense fallback={<>loading...</>}>
              <Chat socket={socket} />
            </React.Suspense>
          }></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;