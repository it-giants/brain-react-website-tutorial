import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
