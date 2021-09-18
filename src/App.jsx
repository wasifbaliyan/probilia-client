import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Wishlist from "./pages/Wishlist";
import { setAuth } from "./redux/authSlice";
import { getCart } from "./redux/cartSlice";
import { getWishlist } from "./redux/wishlistSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if ("login" in localStorage) {
      const login = JSON.parse(localStorage.getItem("login"));
      axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`;
    }
  }, [isLoggedIn]);
  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      dispatch(setAuth({ isLoggedIn }));
    }
  }, [dispatch, isLoggedIn]);
  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      dispatch(getWishlist());
      dispatch(getCart());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={ProductList} />
        <PrivateRoute path="/cart" component={Cart} />
        <PrivateRoute path="/wishlist" component={Wishlist} />
        <PrivateRoute path="/my-account" component={Account} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
