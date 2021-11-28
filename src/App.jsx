import axios from "axios";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import Spinner from "./components/Spinner";
import { getUser, setAuth } from "./redux/authSlice";
import { getCart } from "./redux/cartSlice";
import { getWishlist } from "./redux/wishlistSlice";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const OrderSuccess = React.lazy(() => import("./pages/OrderSuccess"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const ProductList = React.lazy(() => import("./pages/ProductList"));
const Account = React.lazy(() => import("./pages/Account"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Cart = React.lazy(() => import("./pages/Cart"));

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
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <Layout>
      <ScrollToTop />
      <ToastContainer autoClose={1500} position="top-center" />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={ProductList} />
          <PrivateRoute path="/cart" component={Cart} />
          <PrivateRoute path="/wishlist" component={Wishlist} />
          <PrivateRoute path="/my-account" component={Account} />
          <PrivateRoute path="/order-success" component={OrderSuccess} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
