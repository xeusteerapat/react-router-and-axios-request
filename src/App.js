import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Friends from './Pages/Friends';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="ui container">
      <h1>Hello, Everyone</h1>
      <div className="ui four item menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
        <Link to="/contact" className="item">
          Contact
        </Link>
        <Link to="/friends" className="item">
          Friends
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/error" component={NotFound} />
        <Redirect to="/error" />
      </Switch>
    </div>
  );
}

export default App;
