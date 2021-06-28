import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Header from './Header'
// import Banner from './Banner'
import SearchPage from './SearchPage'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
