import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import { Navbar, Footer } from './layout'
import { Home, Join, CreateRoom, quiz } from './pages'



function App() {
  return (
    <div className="App">

      
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create-lobby">
            <CreateRoom />
          </Route>
          <Route path="/join-lobby">
            <Join />
          </Route>
          <Route path="/quiz">
            <Join />
          </Route>
          {/*<Route path="/leaderboard">
            <Leaderboard />
          </Route> */}
        </Switch>
        <Footer />

    </div>
  );
}

export default App;










