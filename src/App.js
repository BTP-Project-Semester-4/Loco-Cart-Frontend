import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Categories } from './components/Screens/Category/Category';
 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/all_categories" exact component={Categories}/>
      </Switch>
    </Router>
  );
}

export default App;
