import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import { setAuth } from "./redux/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const { isLoggedIn } = JSON.parse(localStorage.getItem("login")) || {};
    if (isLoggedIn) {
      dispatch(setAuth({ isLoggedIn }));
    }
  }, [dispatch]);
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/products" component={ProductList} /> */}
        <PrivateRoute path="/products" component={ProductList} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
