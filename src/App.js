import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar, Footer } from "./layout";
import { Home, Join, Create, Quiz, Leaderboard, SPA } from "./pages";
import { WaitingRoom, WaitingRoom2 } from "./components";
import { socket, SocketContext } from "./context/socket";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <Navbar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
            </Route>
            <Route path="/create-lobby">
            <Create />
            </Route>
            <Route path="/join-lobby">
            <Join />
          </Route> */}
          <Route path="/SPA">
            <SPA />
          </Route>
          {/* <Route path="/quiz/:category/:difficulty/:numberOfQuestions" > 
            <Quiz />
            </Route>
            <Route path="/leaderboard">
            <Leaderboard />
            </Route>
            <Route path = "/Waiting-room/:lobbyName">
            <WaitingRoom/>
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </SocketContext.Provider>
  );
}

export default App;
