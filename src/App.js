import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Categories } from './components/Screens/Category/Category';
 
function App() {
  return (
<<<<<<< HEAD
    <div className="App">
    </div>
=======
    <Router>
      <Switch>
        <Route path="/all_categories" exact component={Categories}/>
      </Switch>
    </Router>
>>>>>>> 1d5b559278e1f232086b2793a1ba1410d28c78f7
  );
}

export default App;
