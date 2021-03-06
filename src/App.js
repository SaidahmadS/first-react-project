import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {useState} from 'react';

import Tickets from './pages/Tickets';
import Overview from './pages/Overview'
import Ideas from './pages/Ideas'

import Sidebar from './containers/Sidebar';
import Toolbar from './containers/Toolbar'

import './assets/styles/main.scss'

const App = () => {

  const [activePage, setActivePage] = useState('');

  return (
    <Router>
      <div className="App">
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>
        
        <div className="content">

          <Toolbar activePage={activePage}/>
          
          <Switch>
            <Route path="/tickets" component={Tickets}/>
            <Route path="/overview" component={Overview}/>
            <Route path="/ideas" component={Ideas}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
} 

export default App;