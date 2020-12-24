import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Categories } from './components/Screens/Category/Category';
import { SubCategories } from './components/Screens/Category/SubCategory/SubCategories';
 
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Category" exact component={Categories}/>
        <Route path="/Category/:id" component={SubCategories}/>     
      </Switch>
    </Router>
  );
}

export default App;
