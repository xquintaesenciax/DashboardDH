import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
function App() {
  return (
    <Router>
      <div id="wrapper">
        <SideBar />
        <Switch>
          <Route path="/" component={ContentWrapper} />
          <Route path="/genres" component={GenresInDb} />
          <Route path="/lastmovie" component={LastMovieInDb} />
          <Route path="/contentrow" component={ContentRowMovies} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
