import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import SellerSigninScreen from "./components/Screens/SellerSignIn/SellerSigninScreen";
import SellerRegisterScreen from "./components/Screens/SellerSignUp/SellerRegisterScreen";
import CustomerSigninScreen from "./components/Screens/SignIn/CustomerSigninScreen";
import CustomerRegisterScreen from "./components/Screens/SignUp/CustomerRegisterScreen";
import { Categories } from "./components/Screens/Category/Category";
import { SubCategories } from "./components/Screens/Category/SubCategory/SubCategories";
import SellerProfile from "./components/Screens/SellerProfile/SellerProfile";
import UserProfile from "./components/Screens/UserProfile/UserProfile";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Switch>
          <Route path="/" component={SellerSigninScreen} exact />
          <Route path="/sellersignin" component={SellerSigninScreen} />
          <Route path="/sellersignup" component={SellerRegisterScreen} />
          <Route path="/signin" component={CustomerSigninScreen} />
          <Route path="/signup" component={CustomerRegisterScreen} />
          <Route path="/category" exact component={Categories} />
          <Route path="/category/:id" component={SubCategories} />
          <Route path="/sellerprofile" component={SellerProfile} />
          <Route path="/userprofile" component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
