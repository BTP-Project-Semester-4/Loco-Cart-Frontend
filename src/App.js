import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import SellerSigninScreen from "./components/Screens/SellerSignIn/SellerSigninScreen";
import SellerRegisterScreen from "./components/Screens/SellerSignUp/SellerRegisterScreen";
import CustomerSigninScreen from "./components/Screens/SignIn/CustomerSigninScreen";
import CustomerRegisterScreen from "./components/Screens/SignUp/CustomerRegisterScreen";
import { Categories } from "./components/Screens/Category/Category";
import { SubCategories } from "./components/Screens/Category/SubCategory/SubCategories";
import { SearchProduct } from "./components/Screens/SearchProduct/SearchProduct";
import SellerProfile from "./components/Screens/SellerProfile/SellerProfile";
import UserProfile from "./components/Screens/UserProfile/UserProfile";
import CustomerOTP from "./components/Screens/CustomerOTP/CustomerOTP";
import SellerOTP from "./components/Screens/SellerOTP/SellerOTP";
import NotFound from "./components/NotFound/NotFound";
import Nav from "./components/Navbars/navbar";
import Footer from "./components/Footers/footer";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import CartScreen from "./components/Screens/Cart/CartScreen";
import PlaceOrder from "./components/Screens/PlaceOrder/PlaceOrder";
import Header from "./components/Header/Header";
import Productdesc from "./components/Screens/ProductDescription/productsdescription";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          {/* <Nav /> */}
          <Header />
        </header>
        <main style={{}}>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/sellersignin" component={SellerSigninScreen} />
            <Route
              path="/sellersignup"
              component={SellerRegisterScreen}
              exact
            />
            <Route path="/signin" component={CustomerSigninScreen} />
            <Route path="/signup" component={CustomerRegisterScreen} exact />
            <Route path="/cart" component={CartScreen} />
            <Route path="/category" exact component={Categories} />
            <Route path="/category/:id" component={SubCategories} />
            <Route path="/sellerprofile/:id" component={SellerProfile} />
            <Route path="/userprofile/:id" component={UserProfile} />
            <Route path="/customerotp" component={CustomerOTP} />
            <Route path="/sellerotp" component={SellerOTP} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/search/:id" component={SearchProduct} />
            <Route path="/product/:id" component={Productdesc} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
