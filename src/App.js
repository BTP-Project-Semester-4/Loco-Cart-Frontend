import "./App.css";
import SellerSignin from "./screens/SellerSigninScreen";
import { BrowserRouter, Link, Route } from "react-router-dom";
import SellerSigninScreen from "./screens/SellerSigninScreen";
import SellerRegisterScreen from "./screens/SellerRegisterScreen";
import CustomerSigninScreen from "./screens/CustomerSigninScreen";
import CustomerRegisterScreen from "./screens/CustomerRegisterScreen";
import { Categories } from "./components/Screens/Category/Category";
import { SubCategories } from "./components/Screens/Category/SubCategory/SubCategories";
import SellerProfile from "./components/Screens/SellerProfile/SellerProfile";
import UserProfile from "./components/Screens/UserProfile/UserProfile";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        {/* <header className="row">
          <div>
            <Link className="brand" to="/">
              LocoShop
            </Link>
          </div>
          <div>
            <Link to="/sellersignin">Seller</Link>
          </div>
        </header> */}
        <main>
          <Route path="/" component={SellerSigninScreen} exact />
          <Route path="/sellersignin" component={SellerSigninScreen} />
          <Route path="/sellersignup" component={SellerRegisterScreen} />
          <Route path="/signin" component={CustomerSigninScreen} />
          <Route path="/signup" component={CustomerRegisterScreen} />
          <Route path="/category" exact component={Categories} />
          <Route path="/category/:id" component={SubCategories} />
          <Route path="/sellerprofile" component={SellerProfile} />
          <Route path="/userprofile" component={UserProfile} />
        </main>
        {/* <footer className="row center">All right reserved</footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
