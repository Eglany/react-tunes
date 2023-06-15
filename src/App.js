import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <main>
        {/* https://stackoverflow.com/questions/50584641/invariant-violation-you-should-not-use-switch-outside-a-router?rq=1 */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => (<Redirect to="/search" />) } />
            <Route path="/search" component={ Search } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/album/:id" render={ (props) => <Album { ...props } /> } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
