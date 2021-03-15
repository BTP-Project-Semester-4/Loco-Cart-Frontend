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
import Footer from "./components/Footers/footer";
import HomeScreen from "./components/Screens/HomeScreen/HomeScreen";
import CartScreen from "./components/Screens/Cart/CartScreen";
import PlaceOrder from "./components/Screens/PlaceOrder/PlaceOrder";
import Header from "./components/Header/Header";
import Productdesc from "./components/Screens/ProductDescription/productdescription.jsx";
import Productdesc2 from "./components/Screens/ProductDescription/otherSellerProductDiscription";
import AboutUs from "./components/Screens/AboutUs/aboutus";
import AddProduct from "./components/Screens/AddProduct/AddProduct";
import Feedback from "./components/Screens/SiteFeedback/Feedback.jsx";
import Notifications from "./components/Screens/Notification/Bes.jsx";
import AllActiveBids from "./components/Screens/AllActiveBids/AllActiveBids";
import AllSellers from "./components/Screens/AllSellers/AllSellers";
import SellerProducts from "./components/Screens/SellerProducts/SellerProducts";
import EditProfile from "./components/Screens/EditProfile/EditProfile";
import SellerEditProfile from "./components/Screens/SellerEditProfile/SellerEditProfile";
import BiddingScreenSeller from "./components/Screens/BiddingScreenSeller/BiddingScreenSeller";
import ForgotPassword from "./components/Screens/CustomerForgotPassword/ForgotPassword";
import CustomerAllBids from "./components/Screens/CustomerAllBids/CustomerAllBids";
import CustomerBiddingScreen from "./components/Screens/CustomerBiddingScreen/CustomerBiddingScreen";
import LoadingScreen from "./components/Screens/LoadingScreen/LoadingScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/sellersignin" component={SellerSigninScreen} />
            <Route
              path="/sellersignup"
              component={SellerRegisterScreen}
              exact
            />
            <Route path="/signin" component={CustomerSigninScreen} exact />
            <Route path="/signup" component={CustomerRegisterScreen} exact />
            <Route path="/cart" component={CartScreen} />
            <Route path="/category" exact component={Categories} />
            <Route path="/category/:id" component={SubCategories} />
            <Route path="/sellerprofile" component={SellerProfile} />
            <Route path="/userprofile" component={UserProfile} />
            <Route path="/customerotp" component={CustomerOTP} />
            <Route path="/sellerotp" component={SellerOTP} />
            <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/search/:id" component={SearchProduct} />
            <Route path="/product/:id" component={Productdesc} />
            <Route path="/sellerproduct/:id" component={Productdesc2} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/allactivebids" component={AllActiveBids} />
            <Route path="/allsellers/:id" component={AllSellers} />
            <Route path="/sellerproducts" component={SellerProducts} />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/sellereditprofile" component={SellerEditProfile} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path="/bids/:id" component={BiddingScreenSeller} />
            <Route path="/mybids" exact component={CustomerAllBids} />
            <Route path="/mybids/:id" component={CustomerBiddingScreen} />
            <Route path="/loading" component={LoadingScreen} />
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
